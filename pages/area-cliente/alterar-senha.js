import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import AlterarSenhaContainer from '../../containers/AreaDoCliente/AlterarSenha';
import Rodape from '../../containers/Rodape';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';
import { Divisor } from '../styles/Components/Components';

class AlterarSenha extends Component {


    static async getInitialProps(ctx){
        initialize(ctx);
        return callBaseData([], ctx);
    }

    async componentDidMount(){
        await this.props.getUser({ token: this.props.token})
    }
    render(){
        return(
            <Layout title="Meus Dados | Loja Zellus - Moda e estilo">
                <Cabecalho />
                <Divisor height="50px" />
                <AlterarSenhaContainer />
                <Rodape/>
            </Layout>
        )
    }
}


const mapStateToProps = state => ({
    token: state.auth.token
})


export default connect(mapStateToProps, actions)(AlterarSenha)