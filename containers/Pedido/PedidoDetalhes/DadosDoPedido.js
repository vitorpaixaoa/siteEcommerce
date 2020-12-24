import React, { Component } from 'react';
import TextoDados from '../../../components/Texto/Dados';
import TabelaSimples from '../../../components/Tabela/Simples';
import {formatMoney} from '../../../utils';

class DadosDoPedido extends Component {

    renderDadosDoCliente(){
        return(
            <div className="flex-3">
                <h4 className="dados-do-cliente">Dados do Cliente</h4>
                <br/>
                <TextoDados chave="Nome" valor="Sabrino Jason" />
                <TextoDados chave="CPF" valor="111.222.333-45" />
                <TextoDados chave="Telefone" valor="(98) 91234-5678" />
                <TextoDados chave="Data de Nascimento" valor="17/08/1990" />
            </div>
        )
    }

    renderDadosDoCarrinho(){
        const carrinho = [
            {
                "Produto": "Conjunto Roso bonitão - M",
                "Preço Und.": formatMoney(180),
                "Quantidade": 1,
                "Preço Total": formatMoney(180)
            },
            {
                "Produto": "Aquele vestido lá - M",
                "Preço Und.": formatMoney(100),
                "Quantidade": 2,
                "Preço Total": formatMoney(200)
            },
        ]
        return(
            <div className="flex-5">
            <h4 className="headline">CARRINHO</h4>
            <br/>
            <TabelaSimples
                cabecalho={[ "Produto", "Preço Und.", "Quantidade", "Preço Total" ]}
                dados={carrinho} />
        </div>
        )
    }

    renderDadosDeEntrega(){
        return(
            <div className="flex-3">
                <h4 className="headline">DADOS DE ENTREGA</h4>
                <br/>
                <TextoDados chave="Endereço" valor="Rua Garoto Ney" />
                <TextoDados chave="Número" valor="11" />
                <TextoDados chave="Bairro" valor="Vila Seleção BR" />
                <TextoDados chave="Complemento" valor="" />
                <TextoDados chave="Cidade" valor="Futs" />
                <TextoDados chave="Estado" valor="SP" />
                <TextoDados chave="CEP" valor="65050000" />

            </div>
        )
    }

    renderDadosDePagamento(){
        return(
            <div className="flex-5">
                <h4 className="headline">DADOS DE PAGAMENTO</h4>
                <br/>
                <TextoDados chave="Taxa de Entrega" valor={formatMoney(20)}/>
                <TextoDados chave="Valor do Pedido" valor={formatMoney(280)} />
                <TextoDados chave="Valor Total" valor={formatMoney(300)} />
                <TextoDados chave="Forma de Pagamento" valor="Minha Roupa Minha Vida - 24x" />
            </div>
        )
    }


    render(){
        return(
            <div className="Detalhes-Do-Pedido">
                <div className="flex horizontal">
                    { this.renderDadosDoCliente() }
                    { this.renderDadosDoCarrinho() }
                </div>
                <div className="flex horizontal">
                    { this.renderDadosDeEntrega() }
                    { this.renderDadosDePagamento() }
                </div>
            </div>
        )
    }
}

export default DadosDoPedido;