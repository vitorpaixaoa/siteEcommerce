import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormSimples from '../../../components/Inputs/FormSimples'
import { API, versao } from '../../../config';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';


class LoginContainer extends Component {
    state ={
        email:"",
        senha: "",
        aviso: null,
        erros: {}
    }

    validate(){
        const { email, senha } = this.state;
        const erros = {};

        if(!email) erros.email = "Preencha aqui com seu email";
        if(!senha) erros.senha = "Preencha aqui com a sua senha";

        this.setState({ erros, aviso: null});
        return (Object.keys(erros).length === 0)
    }

    handleSubmit(){
        if(!this.validate()) return;
        const { email, senha } = this.state;
        this.props.autenticar({ email, password: senha }, false, (error) => {
            if(error) this.setState({ aviso: {status: false, message: error.message }});
            else this.setState({ aviso: null });
        })
    }

    onChange = ( field, value ) => this.setState({ [field]: value}, ()=> this.validate());

    render(){
        const { email, senha, erros, aviso} = this.state;
        return(
            <div className="Login-Container">
                <h2 className="text-center">Minha Conta</h2>
                <br/><hr/><br/>
                <div className="form-login">
                    <FormSimples 
                        value={email} 
                        erro={erros.email}
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange ={(e) => this.onChange( "email", e.target.value)}  />

                    <FormSimples 
                        value={senha} 
                        name="Senha" 
                        erro={erros.senha}
                        type="password" 
                        onChange ={(e) => this.onChange( "senha", e.target.value)}
                        placeholder="Senha" />
                    <div className="flex flex-right">
                        <a href={`${API}/${versao}/api/usuarios/recuperar-senha`}>
                            <small>Esqueceu sua senha? </small>
                        </a>
                    </div>
                    <br/>
                    <AlertGeral aviso={aviso} />
                    <div className="flex flex-center">
                        <button 
                            className="btn btn-primary"
                            onClick={() => this.handleSubmit()} >ENTRAR</button>
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



export default connect(null, actions)(LoginContainer);