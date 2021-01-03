import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import ProdutosCategoria from '../../containers/Lista/ProdutosCategoria';
import Rodape from '../../containers/Rodape';
import actions from '../../redux/actions';
import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';


class Categoria extends Component {

    static async getInitialProps(ctx){
        initialize(ctx);
        return callBaseData([
            actions.fetchProdutosCategoria.bind(null, ctx.query.id ),
            actions.fetchCategoria.bind(null, ctx.query.id ),
        ], ctx );
    }

    render(){
        const { categoria } = this.props;
        return(
            <Layout title={`${categoria ? categoria.nome : "-"} | Loja Zellus - Moda e Estilo`}>
                <Cabecalho />
                <ProdutosCategoria />
                <Rodape />
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    categoria: state.categoria.categoria
})

export default connect(mapStateToProps, actions )(Categoria)