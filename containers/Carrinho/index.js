import React, { Component } from 'react';
import ListaDeProdutos from './ListaDeProdutos';
import DadosDoCarrinho from './DadosDoCarrinho';

class CarrinhoContainer extends Component {
    render(){
        return( 
            <div className="container Carrinho">
                <h2>Detalhes dos Pedidos</h2>
                <br/>
                <ListaDeProdutos />
                <DadosDoCarrinho />
            </div>
        )
    }
}

export default CarrinhoContainer;