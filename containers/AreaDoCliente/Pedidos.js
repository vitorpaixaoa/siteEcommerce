import React, { Component } from 'react';

import MenuAreaDoCliente from '../Menu/AreaDoCliente';
import ListaPedidos from '../Lista/Pedidos';

export default class PedidosContainer extends Component {
    render(){
        return(
            <div>
                <MenuAreaDoCliente />
                <ListaPedidos/>
            </div>
        )
    }
}