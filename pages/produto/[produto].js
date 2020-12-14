import React, { Component } from 'react';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import Produto from '../../containers/Produto';
import Rodape from '../../containers/Rodape';


export default class ProdutoPage extends Component {

    render(){
        return(
            <Layout title="Conjunto Roso TOP | Zellus - Moda e estilo">
                <Cabecalho />
                <Produto />
                <Rodape />
            </Layout>
        )
    }
}