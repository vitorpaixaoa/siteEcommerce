import {
    SET_FORM,
    CLEAN_FORM,
    SET_TIPO_PAGAMENTO,
    FETCH_SESSION_ID,
    FETCH_SENDER_HASH,
    NOVO_PEDIDO,
    PAGAR_PEDIDO
} from '../types';

import axios from 'axios';
import { API, loja, versao } from '../../config';
import { getCart } from '../../utils/cart';
import { getHeaders } from './helpers';
import errorHandling from './errorHandling';
import  Router  from 'next/router';
import { cleanCarrinho } from './carrinhoActions';


export const setForm = (payload, prefix) => dispatch => {
    dispatch({ type: SET_FORM, payload, prefix });
    return Promise.resolve();
}

export const cleanForm = () => ({ type: CLEAN_FORM });

export const setTipoPagamento = (tipoPagamentoSelecionado) => ({ type: SET_TIPO_PAGAMENTO, tipoPagamentoSelecionado})

export const getSessionPagamento = () => (dispatch) => {
    axios.get(`${API}/${versao}/api/pagamentos/session`).then((response) => {
        dispatch({ type: FETCH_SESSION_ID, payload: response.data });

        PagSeguroDirectPayment.setSessionId(response.data.sessionId);
        let senderHash = PagSeguroDirectPayment.getSenderHash();
        dispatch({ type: FETCH_SENDER_HASH, senderHash });
        console.log(senderHash)
    })
    .catch((e) => console.log(e));
};


export const novoPedido = (form, freteSelecionado, 
    tipoPagamentoSelecionado, valorTotal, 
    token, senderHash, carrinho = getCart(), cb = null) => dispatch => {
        axios.post(`${API}/${versao}/api/pedidos?loja=${loja}`, {
            carrinho,
            entrega: {
                custo: freteSelecionado.Valor.replace(',','.'),
                tipo: (freteSelecionado.Codigo).toString(),
                prazo: freteSelecionado.PrazoEntrega,
                endereco: {
                    local: form.local,
                    numero: form.numero,
                    complemento: form.complemento,
                    bairro: form.bairro,
                    cidade: form.cidade,
                    estado: form.estado,
                    CEP: form.CEP
                }
            },
            pagamento: {
                valor: tipoPagamentoSelecionado === "cartao" ? 
                            form.parcelasPagamentoSelecionado.totalAmount : valorTotal,
                forma: tipoPagamentoSelecionado === "cartao" ? "creditCard" : "boleto",
                parcelas: tipoPagamentoSelecionado === "cartao" ? form.parcelasPagamentoSelecionado.quantity : 1,
                enderecoEntregaIgualCobranca: form.dadosEntregaIgualCobranca,
                endereco:{
                    local:!form.dadosEntregaIgualCobranca ? form.dadosCobranca.local : form.local,
                    numero:!form.dadosEntregaIgualCobranca ? form.dadosCobranca.numero : form.numero,
                    complemento: !form.dadosEntregaIgualCobranca ? form.dadosCobranca.complemento : form.complemento,
                    bairro: !form.dadosEntregaIgualCobranca ? form.dadosCobranca.bairro : form.bairro,
                    cidade: !form.dadosEntregaIgualCobranca ? form.dadosCobranca.cidade : form.cidade,
                    estado: !form.dadosEntregaIgualCobranca ? form.dadosCobranca.estado : form.estado,
                    CEP: !form.dadosEntregaIgualCobranca ? form.dadosCobranca.CEP : form.CEP
                },
                cartao: tipoPagamentoSelecionado === "cartao" ? {
                    nomeCompleto: form.nomeCartao.trim(),
                    codigoArea: form.telefone.slice(0,2),
                    telefone: form.telefone.slice(2).trim(),
                    dataDeNascimento: form.dataDeNascimento,
                    credit_card_token: form.credit_card_token,
                    cpf: form.cpf
                } : undefined
            }
        }, getHeaders(token))
        .then(response => {
            dispatch({ type: NOVO_PEDIDO, payload: response.data});
            dispatch(pagarPedido(response.data.pedido.pagamento._id, senderHash, cb));
        })
        .catch(e => cb(errorHandling(e)));
    };

export const pagarPedido = (id, token, senderHash, cb = null) => dispatch => {
    axios.post(
        `${API}/${versao}/api/pagamentos/pagar/${id}?loja=${loja}`, 
        { senderHash }, 
        getHeaders(token)
    )
    .then(response => {
        dispatch({ type: PAGAR_PEDIDO, payload: response.data });
        cb(null);
        Router.push('/sucesso');
        dispatch(cleanCarrinho());        
    })
    .catch(e => cb(errorHandling(e)));
}


 
export default {
    setForm,
    cleanForm,
setTipoPagamento,
getSessionPagamento,
novoPedido,
pagarPedido
};