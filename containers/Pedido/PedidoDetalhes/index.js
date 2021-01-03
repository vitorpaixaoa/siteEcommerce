import React, { Component } from 'react';
import { connect } from 'react-redux';
import DadosDoPedido from './DadosDoPedido'
import DetalhesDaEntrega from './DetalhesDaEntrega'
import DetalhesDoPagamento from './DetalhesDoPagamento'
import actions from '../../../redux/actions';


class PedidoDetalhes extends Component {

    

    componentDidMount(){
        this.fetchPedido();
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
        if( pedido && token ) fetchPedido(pedido, token)
    }

    cancelarPedido (){
        const { token, pedido } = this.props;
        if(window.confirm("Você realmente deseja cancelar seu pedido ?")){
            this.props.cancelarPedido(pedido._id, token, (error) => {
                if(error) alert("Ocorreu um erro ao cancelar o pedido, tente novamente.")
            });
        }
    }

    render(){
        const { pedido } = this.props;
        return(
            <div className="flex-4 conteudo-area-cliente">
                <div className="flex flex-start">
                    <h2>PEDIDO #{ pedido ? pedido._id.slice(18) : ""}&nbsp;</h2>
                    <button className="btn btn-sm btn-primary"
                    disabled={pedido && pedido.cancelado}
                    onClick={() => this.cancelarPedido()} >
                        { pedido && pedido.cancelado ? "CANCELADO" : "CANCELAR PEDIDO"}
                    </button>
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