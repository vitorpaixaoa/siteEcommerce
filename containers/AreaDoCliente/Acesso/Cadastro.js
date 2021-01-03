import React, { Component } from 'react';
import { connect } from 'react-redux';
import AlertGeral from '../../../components/Alert/Geral';
import FormSimples from '../../../components/Inputs/FormSimples'
import actions from '../../../redux/actions';
import { ESTADOS } from "../../../utils";
import { formatCEP, formatCPF, formatDataDeNascimento, formatNumber, formatTelefone } from '../../../utils/format';
import { validateCPF } from '../../../utils/validate'
import axios from 'axios'
class CadastroContainer extends Component {
    state ={
        aviso: null,
        erros: {},
        email:"",
        senha: "",

        nome:"",
        CPF:"",
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

    handleSubmit(){
        if(!this.validate()) return null;
        this.props.newCliente(this.state, (error) => {
            if(error) this.setState({ aviso: { status: false, message: error.message }});
        });
    }

    validate(){
        const { email, senha, nome, CPF, dataDeNascimento, telefone,
            local, numero, bairro, cidade, estado, CEP } = this.state
       
            const erros = {}

       if(!email) erros.email = "Preencha aqui com seu email";
       if(!senha) erros.senha = "Preencha aqui com seu senha"

       if(!nome) erros.nome = "Preencha aqui com seu nome"
       if(!CPF || CPF.length !== 14 ) erros.CPF = "Preencha aqui com seu CPF"
       if( CPF && CPF.length === 14 && !validateCPF(CPF)) erros.CPF = "Preencha aqui com seu CPF corretamente"
       if(!dataDeNascimento || dataDeNascimento.length !== 10 )   erros.dataDeNascimento = "Preencha aqui com sua data de nascimento"
       if(!telefone || telefone.length < 11 ) erros.telefone = "Preencha aqui com seu telefone"

       if(!local) erros.local = "Preencha aqui com seu Endereço"
       if(!numero) erros.numero = "Preencha aqui com o numero"
       if(!bairro) erros.bairro = "Preencha aqui com seu bairro"
       if(!cidade)erros.cidade = "Preencha aqui com sua cidade"
       if(!estado) erros.estado = "Preencha aqui com seu estado"
       if(!CEP || CEP.length !== 9 ) erros.CEP = "Preencha aqui com seu CEP"


       this.setState({ erros, aviso: null})
       return (Object.keys(erros).length === 0 );
    }


    onChangeCEP =(field, value ) =>  {
        this.setState({ [field]: value }, () => this.pegarDadosEndereco())
    }

    pegarDadosEndereco(){
        const { CEP  } = this.state;
        this.validate();
            if(CEP.length === 9){
                axios.get(`https://viacep.com.br/ws/${CEP.replace("-","")}/json/unicode`)
                .then((response) => {
                    this.setState({
                        "local": response.data["logradouro"],
                        "bairro": response.data["bairro"],
                        "cidade": response.data["localidade"],
                        "estado": response.data["uf"]
                    })
                })
                .catch(e => console.log(e))
            }
            this.validate()
    }

    onChange = (field, value) => this.setState({ [field]: value }, ()=> this.validate())
    render(){
        const { email, senha, 
                nome, CPF, telefone, dataDeNascimento, 
                local, numero, complemento, bairro, cidade, estado, CEP, aviso, erros } = this.state;
        return(
            <div className="Cadastro-Container">
                <br/>
                <h2 className="text-center">CRIAR CONTA</h2>
                <br/><hr/><br/>
                <div className="form-cadastro">
                    <FormSimples 
                        value={email} erro={erros.email} name="email" type="email"
                        placeholder="Email" onChange={(e) => this.onChange("email", e.target.value)} />
                    <FormSimples 
                        value={senha} erro={erros.senha} name="Senha" type="password" 
                        placeholder="Senha" onChange={(e) => this.onChange("senha", e.target.value)} />
                    <br/>
                    <FormSimples 
                        value={nome} erro={erros.nome} name="nome" type="text" 
                        placeholder="Nome"  onChange={(e) => this.onChange("nome", e.target.value)} />
                    <FormSimples 
                        value={CPF} erro={erros.CPF} name="CPF" type="text" 
                        placeholder="CPF - 123.456.789-10"  onChange={(e) => this.onChange("CPF", formatCPF(e.target.value))} />
                    <div className="flex horizontal">
                        <div className="flex-1">
                        <FormSimples value={telefone} erro={erros.telefone} label="Telefone" name="telefone" type="text" 
                        placeholder="Telefone"  onChange={(e) => this.onChange("telefone",formatTelefone( e.target.value))} />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={dataDeNascimento} erro={erros.dataDeNascimento} name="dataDeNascimento" type="text" 
                            placeholder="DD/MM/YYY" label="Data de nascimento"  onChange={(e) => this.onChange("dataDeNascimento", formatDataDeNascimento(e.target.value))} />                        
                        </div>
                    </div>
                   
                    <br/>
                    <FormSimples erro={erros.CEP} value={CEP} name="CEP"  placeholder="12345-789" label="CEP" 
                    onChange={(e) => this.onChangeCEP("CEP", formatCEP(e.target.value))}/>
                    <div className="flex horizontal">
                        <div className="flex-3">
                            <FormSimples value={local} name="local"  erro={erros.local} 
                            placeholder="Endereço" onChange={(e) => this.onChange("local", e.target.value)} /> 
                        </div>
                        <div className="flex-1">
                            <FormSimples value={numero} name="numero" erro={erros.numero}
                             placeholder="Número" onChange={(e) => this.onChange("numero", formatNumber(e.target.value))} />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={bairro} name="bairro" erro={erros.bairro} 
                            placeholder="Bairro" onChange={(e) => this.onChange("bairro", e.target.value)} />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={complemento} name="complemento" 
                            erro={erros.complemento} placeholder="Complemento" onChange={(e) => this.onChange("complemento", e.target.value)} />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={cidade} name="cidade" erro={erros.cidade} 
                             placeholder="Cidade" label="Cidade" onChange={(e) => this.onChange("cidade", e.target.value)} />
                        </div>
                        <div className="flex-1">
                            <div className="form-input">
                                <label>Estado</label>
                                    <select name="estado" value={estado || ""} onChange={(e) => this.onChange("estado", e.target.value)}>
                                        <option>Selecione seu estado</option>
                                        { Object.keys(ESTADOS).map((abbr) =>  (<option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                                </select>
                                {
                                    erros.estado && (
                                        <small className="erro">{erros.estado}</small>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <br/>
                    <AlertGeral aviso={aviso} />
                    <div className="flex flex-center">
                        <button className="btn btn-primary"
                        onClick={() => this.handleSubmit()} >
                                CADASTRAR
                            </button>
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
export default connect(null, actions)(CadastroContainer);