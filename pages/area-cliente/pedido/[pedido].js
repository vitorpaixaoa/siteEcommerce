import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from '../../../components/Layout';
import Cabecalho from '../../../containers/Cabecalho';
import PedidoContainer from '../../../containers/Pedido'
import Rodape from '../../../containers/Rodape';
import actions from '../../../redux/actions';
import initialize from '../../../utils/initialize';
import callBaseData from '../../../utils/callBaseData';
import { Divisor } from '../../styles/Components/Components';

 class Pedido extends Component {

    static async getInitialProps(ctx){
        initialize(ctx);
        return { 
            ... await callBaseData([], ctx), 
            query: ctx.query };
    }

    async componentDidMount(){
        await this.props.getUser({ token: this.props.token})
    }




    render(){
        const { query } = this.props;
        return(
            <Layout title="Pedido | Loja Zellus - Moda e estilo.">
                <Cabecalho />
                <Divisor height="50px" />
                <PedidoContainer query={query}/>
                <Rodape/>
            </Layout>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps, actions)(Pedido);