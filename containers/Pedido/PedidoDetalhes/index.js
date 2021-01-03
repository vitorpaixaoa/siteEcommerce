import React, { Component } from 'react';
import { connect } from 'react-redux';
import DadosDoPedido from './DadosDoPedido'
import DetalhesDaEntrega from './DetalhesDaEntrega'
import DetalhesDoPagamento from './DetalhesDoPagamento'
import actions from '../../../redux/actions';


class PedidoDetalhes extends Component {

    

    componentDidMount(){
        this.fetchPedido();
        console.log(this.props.pedido)
    }

    componentDidUpdate(){
        if(!this.props.pedido) this.fetchPedido();
    }

    componentWillUnmount(){
        this.props.cleanPedido();
    }

    fetchPedido(){
        const { token, fetchPedido } = this.props;
        const  {pedido}  = this.props.query;
        console.log(pedido)
        if( pedido && token ) fetchPedido(pedido, token)
    }

    render(){
        const { pedido } = this.props;
        return(
            <div className="flex-4 conteudo-area-cliente">
                <div className="flex flex-start">
                    <h2>PEDIDO #{ pedido ? pedido._id.slice(18) : ""}&nbsp;</h2>
                    <button className="btn btn-sm btn-primary">CANCELAR PEDIDO</button>
                </div>
                <br/>
                <div>
                    <DadosDoPedido />
                </div>
                <br/><br/>
                <div className="flex horizontal">
                    <DetalhesDaEntrega />
                    <DetalhesDoPagamento />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    pedido: state.pedido.pedido

})

export default connect(mapStateToProps, actions)(PedidoDetalhes);