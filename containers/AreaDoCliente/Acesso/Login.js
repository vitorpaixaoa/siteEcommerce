import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormSimples from '../../../components/Inputs/FormSimples'
import { API, versao } from '../../../config';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';

import {LoginBox, Title, ForgotPassword, LinkAcesso, Separator, FormBox} from './styles'
import { Button, CenterBox } from '../../../pages/styles/Components/Components';

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
            <LoginBox>
                <Title>Inicie sessão em sua conta</Title>
                <FormBox>
                    <FormSimples 
                        borderRadius="8px 8px 0 0"
                        value={email} 
                        erro={erros.email}
                        name="email" 
                        type="email" 
                        placeholder="Email"
                        onChange ={(e) => this.onChange( "email", e.target.value)}  />

                    <FormSimples 
                        borderRadius="0 0 8px 8px"
                        value={senha} 
                        name="Senha" 
                        erro={erros.senha}
                        type="password" 
                        onChange ={(e) => this.onChange( "senha", e.target.value)}
                        placeholder="Senha" />
                    <br/><br/>
                    <AlertGeral aviso={aviso} />
                    <CenterBox>
                        <Button width="" background="#FF2A6D" onClick={() => this.handleSubmit()} >Entrar</Button>
                    </CenterBox>

                    <Separator/>

                    <CenterBox>
                        <ForgotPassword href={`${API}/${versao}/api/usuarios/recuperar-senha`}>
                            <span>Esqueceu sua senha?</span>
                        </ForgotPassword>
                    </CenterBox>
                    <LinkAcesso>
                        <span onClick={this.props.changeAcesso}>Ainda não tem uma conta? <span className="click-text" >Clique aqui para criar.</span></span>
                    </LinkAcesso>  
                </FormBox>
            </LoginBox>
        )
    }
}



export default connect(null, actions)(LoginContainer);