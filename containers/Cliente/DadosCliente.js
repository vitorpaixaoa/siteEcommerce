import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

export default class DadosClienteContainer extends Component {
    
    state= {
        email:"",
        nome:"",
        CPF:"",
        senha:"",
        telefone:"",
        dataDeNascimento:"",
        
    }

    onChange =(field, e) =>  this.setState({ [field]: e.target.value });
    
    renderDadosRegistro(){
        const { email, senha } = this.state;
        return(
            <div className="flex-1 flex horizontal" >
                <div className="flex-1">
                    <FormSimples 
                        name={"email"} 
                        value={email} 
                        label="E-mail" 
                        placeholder="E-Mail" 
                        onChange={(e) => this.onChange("email", e )} />
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"senha"} 
                        value={senha} 
                        label="Senha" 
                        placeholder="Senha" 
                        onChange={(e) => this.onChange("senha", e )} />
                </div>
            </div>
        )
    }

    renderDadosUsuario(){
        const { nome, CPF, dataDeNascimento, telefone} = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div className="flex-1">
                    <FormSimples 
                        name={"nome"} 
                        value={nome} 
                        label="Nome" 
                        placeholder="Nome" 
                        onChange={(e) => this.onChange("nome", e )} />
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CPF"} 
                        value={CPF} 
                        label="CPF" 
                        placeholder="CPF" 
                        onChange={(e) => this.onChange("CPF", e )} />
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1">
                        <FormSimples 
                            name={"dataDeNascimento"} 
                            value={dataDeNascimento} 
                            label="Data de Nascimento" 
                            placeholder="DD/MM/AAAA" 
                            onChange={(e) => this.onChange("dataDeNascimento", e )} />
                    </div>
                    <div className="flex-1">
                        <FormSimples 
                            name={"telefone"} 
                            value={telefone} 
                            label="Telefone/Celular" 
                            placeholder="(34) 1234-5678" 
                            onChange={(e) => this.onChange("telefone", e )} />
                    </div>
                </div>
            </div>
        )
    };

    
    
    render(){
        return (
            <div className="flex-1">
                <div>
                    <h2>DADOS DO CLIENTE</h2>
                </div>
                { this.renderDadosRegistro() }
                { this.renderDadosUsuario() }
            </div>
        );
    }
}