import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples'


class LoginContainer extends Component {
    state ={
        email:"",
        senha: ""
    }
    render(){
        const { email, senha } = this.state;
        return(
            <div className="Login-Container">
                <h2 className="text-center">Minha Conta</h2>
                <br/><hr/><br/>
                <div className="form-login">
                    <FormSimples value={email} name="email" type="email" placeholder="Email" />
                    <FormSimples value={senha} name="Senha" type="password" placeholder="Senha" />
                    <br/>
                    <div className="flex flex-center">
                        <button className="btn btn-primary">ENTRAR</button>
                    </div> 
                    <hr/> 
                    <div className="text-center link-acesso">
                        <span onClick={this.props.changeAcesso}>Ainda não tem uma conta? Clique aqui para cadastrar.</span>
                    </div>  
                </div>  

            </div>
        )
    }
}
export default LoginContainer;