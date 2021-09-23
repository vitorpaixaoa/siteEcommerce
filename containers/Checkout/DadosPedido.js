import React, { Component } from 'react';
import ListaDeProdutos from '../Carrinho/ListaDeProdutos';

class DadosPedido extends Component {
    render(){
        return(
            <div className="Dados-Pedido-Container">
                <h2>Dados do pedido</h2>
                <br/>
                <ListaDeProdutos semAlteracoes />
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
export default DadosPedido;