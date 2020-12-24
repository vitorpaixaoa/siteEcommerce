import React, { Component } from 'react';

import PedidosContainer from './Pedidos';
import AcessoContainer from './Acesso'


export default class AreaDoClienteContainer extends Component {
    state={ estaLogado: true };
    render(){
        return this.state.estaLogado ? <PedidosContainer/> : <AcessoContainer />
    }
}