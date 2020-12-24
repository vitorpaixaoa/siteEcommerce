import React, { Component } from 'react';
import MenuAreaDoCliente from '../Menu/AreaDoCliente';
import PedidoDetalhes from './PedidoDetalhes'

class PedidoContainer extends Component {
    render(){
        return(
            <div className="Pedido-Container container-big flex horizontal">
                <MenuAreaDoCliente />
                <PedidoDetalhes />
            </div>
        )
    }
}

export default PedidoContainer;