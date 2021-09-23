import React, { Component } from 'react';
import ListaDeProdutos from '../Carrinho/ListaDeProdutos';
import { Title } from '../Carrinho/styles';

class DadosPedido extends Component {
    render(){
        return(
            <div className="Dados-Pedido-Container">
                <Title>Dados do pedido</Title>
                <ListaDeProdutos semAlteracoes />
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
}
export default DadosPedido;