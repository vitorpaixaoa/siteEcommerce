import React, { Component } from 'react';

import DadosClienteContainer from '../Cliente/DadosCliente';
import ClienteLogin from '../Cliente/ClienteLogin';


class DadosCliente extends Component {
    state={ usuario: true }
    render(){
        return this.state.usuario ? <DadosClienteContainer /> : <ClienteLogin />
    }
}
export default DadosCliente;