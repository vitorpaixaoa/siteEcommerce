import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';


import ListaStatus from '../../../components/Listas/Status';

class DetalhesDaEntrega extends Component {
    render(){
        const { registros } = this.props;
        if(!registros) return null;
        const _regs = registros.filter((reg) => reg.tipo === "entrega");
        const regs = _regs.map((reg) => ({
            data : moment(reg.createdAt).format("DD/MM/YYYY"),
            situacao : reg.situacao
        }));
        return(
            <div className="flex-1">
                <div className="Detalhes-Da-Entrega">
                    <h4>Sobre a Entrega</h4>
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

export default connect(mapStateToProps)(DetalhesDaEntrega);