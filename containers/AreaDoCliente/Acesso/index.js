import React, { Component } from 'react';

import LoginContainer from './Login';
import CadastroContainer from './Cadastro'

import {AcessoBox} from './styles'

export default class AcessoContainer extends Component {
    state={
        paraLogar: true
    }
    changeAcesso =() => this.setState({ paraLogar: !this.state.paraLogar })
    render(){
        return (
            <AcessoBox>
                { this.state.paraLogar ? <LoginContainer changeAcesso={this.changeAcesso} /> : 
                                         <CadastroContainer changeAcesso={this.changeAcesso} />}
            </AcessoBox>
        )
    }
}