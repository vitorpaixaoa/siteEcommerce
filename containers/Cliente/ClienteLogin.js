import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../components/Inputs/FormSimples';
import actions from '../../redux/actions';
import AlertGeral from '../../components/Alert/Geral';


class ClienteLogin extends Component {

    state={
        email: "",
        senha: "",
        aviso: null,
        erros: {}
    }



    renderAvisoRegistro(){
        return(
            <div className="flex-1">
                <h2>Comprar como visitante/Realizar registro</h2>
                <br/>
                <button onClick={() => this.props.permitir()} className="btn btn-success">
                    <span>CONTINUAR</span>
                </button>
            </div>
        )
    }

    validate(){
        const { email, senha } = this.state;
        const erros = {};

        if(!email) erros.email = "Preencha aqui com seu email";
        if(!senha) erros.senha = "Preencha aqui com sua senha";

        this.setState({ erros, aviso: null});
        return !(Object.keys(erros).length > 0);
    }

    onChange = (field, e) => this.setState({ [field]: e.target.value })

    handleSubmit(){
        if(!this.validate()) return null;
        const {email, senha} = this.state;
        this.props.autenticar({ email, password: senha }, false, (error) => {
            if(error) this.setState({ aviso: { status: false, message: error.message }})
        })
    }

    renderFormularioLogin(){
        const { email, senha, erros } = this.state;
        return(
            <div className="flex-1">
                <h2>Fazer Login</h2>
                <AlertGeral aviso={this.state.aviso} />
                <br/>
                <FormInput 
                    name={"email"} 
                    value={email}
                    erro={erros.email}
                    label="E-mail" 
                    placeholder="E-Mail"
                    onChange={(e) => this.onChange("email", e) } />
                <FormInput 
                    name={"senha"} 
                    type="password" 
                    value={senha} 
                    erro={erros.senha}
                    label="Senha" 
                    placeholder="Senha"  
                    onChange={(e) => this.onChange("senha", e)  } />
                <br/>
                <button className="btn btn-success"
                onClick={()=> this.handleSubmit()} >
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

export default connect(null, actions)(ClienteLogin);