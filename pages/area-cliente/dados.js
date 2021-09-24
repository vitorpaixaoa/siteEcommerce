import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Cabecalho from '../../containers/Cabecalho';
import DadosContainer from '../../containers/AreaDoCliente/Dados';
import Rodape from '../../containers/Rodape';
import initialize from '../../utils/initialize';
import callBaseData from '../../utils/callBaseData';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import { Divisor } from '../styles/Components/Components';


 class DadosDoCliente extends Component {

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
                <DadosContainer />
                <Rodape/>
            </Layout>
        )
    }
}


const mapStateToProps = state => ({
    token: state.auth.token
})

export default connect(mapStateToProps,actions)(DadosDoCliente)