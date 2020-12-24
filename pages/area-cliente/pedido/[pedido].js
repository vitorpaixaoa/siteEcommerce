import React, { Component } from 'react';

import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/Pedido'
import Rodape from '../../../containers/Rodape';

export default class AreaDoCliente extends Component {

    render(){
        return(
            <Layout title="Pedido | Loja Zellus - Moda e estilo.">
                <Cabecalho />
                <PedidoContainer/>
                <Rodape/>
            </Layout>
        )
    }
}