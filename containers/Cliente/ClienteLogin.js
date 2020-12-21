import React, { Component } from 'react';
import FormInput from '../../components/Inputs/FormSimples';

class ClienteLogin extends Component {

    state={
        email: "",
        senha: ""
    }

    renderAvisoRegistro(){
        return(
            <div className="flex-1">
                <h2>Comprar como visitante/Realizar registro</h2>
                <br/>
                <button className="btn btn-success">
                    <span>CONTINUAR</span>
                </button>
            </div>
        )
    }

    renderFormularioLogin(){
        const { email, senha } = this.state;
        return(
            <div className="flex-1">
                <h2>Fazer Login</h2>
                <br/>
                <FormInput name={"email"} value={email} label="E-mail" placeholder="E-Mail" onChange={(v) => this.setState({"email": v.target.value}) } />
                <FormInput name={"senha"} type="password" value={senha} label="Senha" placeholder="Senha" onChange={(v) => this.setState({"senha": v.target.value}) } />
                <br/>
                <button className="btn btn-success">
                    <span>ENTRAR</span>
                </button>
            </div>
            
        )
    }

    render(){
        return (
            <div className="Cliente-Login flex horizontal">
                { this.renderAvisoRegistro() }
                { this.renderFormularioLogin() }
            </div>
        )
    }
}

export default ClienteLogin;