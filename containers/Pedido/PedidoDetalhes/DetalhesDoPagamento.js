import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import ListaStatus from '../../../components/Listas/Status';

const REGISTROS  = [
    { data: "20/12/2020", situacao: "Pagamento em processamento"},
    { data: "20/12/2020", situacao: "Pagamento Aprovado"},
    { data: "21/12/2020", situacao: "Pagamento Recebido"}
]
 

class DetalhesDaPagamento extends Component {
    render(){
        const { registros } = this.props;
        if(!registros) return null;
        const _regs = registros.filter((reg) => reg.tipo === "pagamento");
        const regs = _regs.map((reg) => ({
            data : moment(reg.createdAt).format("DD/MM/YYYY"),
            situacao : reg.situacao
        }));
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Pagamento">
                    <h4>Sobre a Pagamento</h4>
                    <br/>
                    <ListaStatus registros={regs} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    registros: state.pedido.pedidoRegistros
})


export default connect(mapStateToProps)(DetalhesDaPagamento);