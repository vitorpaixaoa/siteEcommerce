import React, { Component } from 'react';
import Layout from '../components/Layout';

import Cabecalho from '../containers/Cabecalho';
import Banners from '../containers/Banners';
import Beneficios from '../containers/Beneficios';
import ProdutosPaginaInicial from '../containers/Lista/ProdutosPaginaInicial';
import Rodape from '../containers/Rodape';


export default class Index extends Component {

    render(){
        return(
            <Layout title="Zellus - Moda e estilo">
                <Cabecalho />
                <Banners />
                <Beneficios />
                <ProdutosPaginaInicial />
                <Rodape />
            </Layout>
        )
    }
}