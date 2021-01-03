import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/actions';


class SucessoContainer extends Component {

    renderBoleto(){
        const { pagamento } = this.props;
        return(
            <div >
                <p className="p-sucesso">Para finalizar o pedido, realize o pagamento do boleto pelo link abaixo: </p>
                <br/>
                <a className="btn btn-success flex flex-center " 
                    href={pagamento.payload[0].paymentLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    GERAR BOLETO
                </a>
                <br/>
            </div>
        )
    }

    renderCartao(){
        return(
            <div>
                <p>O pagamento está sendo processado e nós te avisamos no seu email assim que estiver tudo certo! 
                    Obrigado pelo pedido. </p>
                <br/>
            </div>
        )
    }

    renderSucesso(){
        const { pagamento } = this.props;
        return(
            <div className="Sucesso">
                <br/>
                <h1 className="headline-big">PEDIDO CONCLUIDO COM SUCESSO</h1>
                <br/><br/>
                    { pagamento.forma === "boleto" ? this.renderBoleto() : this.renderCartao() }
                <br/>
            </div>
        )

    }

    renderErro(){
       return(
        <div className="Erro">
            <br/>
            <h1 className="headline-big"> HOUVE UM ERRO COM O SEU PEDIDO</h1>
            <br/><br/>
            <p>
                Houve um erro com seu pedido e ele foi cancelado, por favor refaça seu 
                pedido na loja ou entre em contato para continuar o pedido por outro meio.
            </p>
            <br/>
    </div>
       )
    }

    render(){
        const { pagamento } = this.props;
        return(
            <div className="Sucesso-Container flex flex-center container">
                 { !pagamento.payload[0].error ? this.renderSucesso() : this.renderErro()    }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    pedido: state.checkout.novoPedido,
    pagamento: state.checkout.novoPagamento
})

export default connect(mapStateToProps, actions)(SucessoContainer);