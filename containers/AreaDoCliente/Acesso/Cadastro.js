import React, { Component } from 'react';

import FormSimples from '../../../components/Inputs/FormSimples'

import { ESTADOS } from "../../../utils";

class CadastroContainer extends Component {
    state ={
        email:"",
        senha: "",

        nome:"",
        cpf:"",
        telefone: "",
        dataDeNascimento:"",

        local:"",
        numero:"",
        complemento:"",
        bairro:"",
        cidade:"",
        estado: "",
        CEP: ""
    }
    render(){
        const { email, senha, 
                nome, cpf, telefone, dataDeNascimento, 
                local, numero, complemento, bairro, cidade, estado, CEP } = this.state;
        return(
            <div className="Cadastro-Container">
                <br/>
                <h2 className="text-center">CRIAR CONTA</h2>
                <br/><hr/><br/>
                <div className="form-cadastro">
                    <FormSimples value={email} name="email" type="email" placeholder="Email" />
                    <FormSimples value={senha} name="Senha" type="password" placeholder="Senha" />
                    <br/>
                    <FormSimples value={nome} name="nome" type="text" placeholder="Nome" />
                    <FormSimples value={cpf} name="cpf" type="text" placeholder="CPF - 123.456.789-10" />
                    <div className="flex horizontal">
                        <div className="flex-1">
                        <FormSimples value={telefone} label="Telefone" name="telefone" type="text" placeholder="Telefone" />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={dataDeNascimento} name="dataDeNascimento" type="text" placeholder="DD/MM/YYY" label="Data de nascimento" />                        
                        </div>
                    </div>
                   
                    <br/>
                    <div className="flex horizontal">
                        <div className="flex-3">
                            <FormSimples value={local} name="local"  placeholder="Endereço" />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={numero} name="numero"  placeholder="Número" />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={bairro} name="bairro"  placeholder="Bairro" />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={complemento} name="complemento"  placeholder="Complemento" />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={cidade} name="cidade"  placeholder="Cidade" label="Cidade" />
                        </div>
                        <div className="flex-1">
                            <div className="form-input">
                                <label>Estado</label>
                                    <select name="estado" value={estado}>
                                        <option>Selecione seu estado</option>
                                        { Object.keys(ESTADOS).map((abbr) =>  (<option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <FormSimples value={CEP} name="CEP"  placeholder="12345-789" label="CEP"/>
                    <br/>
                    <div className="flex flex-center">
                        <button className="btn btn-primary">CADASTRAR</button>
                    </div>  
                    <hr/>
                    <div className="text-center link-acesso">
                        <span onClick={this.props.changeAcesso}>Já tem uma conta? Clique aqui para entrar.</span>
                    </div>
                </div>  

            </div>
        )
    }
}
export default CadastroContainer;