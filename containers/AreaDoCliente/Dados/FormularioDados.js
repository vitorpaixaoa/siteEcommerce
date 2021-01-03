import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSimples from '../../../components/Inputs/FormSimples';
import TextoDados from '../../../components/Texto/Dados';
import  { ESTADOS } from '../../../utils';
import actions from '../../../redux/actions';

import AlertGeral from '../../../components/Alert/Geral';
import { validateCPF } from '../../../utils/validate';
import { formatCEP, formatCPF, formatDataDeNascimento, formatNumber, formatTelefone } from '../../../utils/format';
import moment from 'moment';


class FormularioDados extends Component {

    state={
        nome: "",
        CPF: "",
        telefone: "",
        dataDeNascimento: "",
        local: "",
        numero: "",
        complemento: "",
        bairro: "",
        cidade: "",
        estado: "",
        CEP: "",
        aviso: null,
        erros: {}
    };

    updateState = (cliente) => {
        this.setState({
            nome: cliente.nome,
            CPF: cliente.cpf,
            telefone: cliente.telefones[0],
            dataDeNascimento: moment(cliente.dataDeNascimento).format("DD/MM/YYYY"),
            local: cliente.endereco.local,
            numero: cliente.endereco.numero,
            complemento: cliente.endereco.complemento,
            bairro: cliente.endereco.bairro,
            cidade: cliente.endereco.cidade,
            estado: cliente.endereco.estado,
            CEP: cliente.endereco.CEP,
        });
    }

    componentDidMount(){
        if(this.props.cliente) this.updateState(this.props.cliente);
        
    }

    componentDidUpdate(prevProps){
        if(
            (!prevProps.cliente && this.props.cliente) ||
            (prevProps.cliente && this.props.cliente &&
            prevProps.cliente.updatedAt !== this.props.cliente.updatedAt )
        ) this.updateState(this.props.cliente);
    }

    validate(){
        const {nome, CPF, dataDeNascimento, telefone,
            local, numero, bairro, cidade, estado, CEP } = this.state
       
            const erros = {}

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

    handleSubmit(){
        const { cliente, token } = this.props;
        if(!cliente || !token || !this.validate()) return null;
        this.props.updateCliente(this.state, cliente._id, token, ((error) => {
            if(error) this.setState({ aviso: { status: false, message: error.message }});
            else alert("Dados atualizados com sucesso")
        }))
        
    }

    onChange = (field, value) => this.setState({ [field]: value }, ()=> this.validate())
    
    

    render(){
        const { 
        nome,CPF,telefone, dataDeNascimento,
         local,numero,complemento, bairro,  cidade,estado,CEP , erros, aviso}  = this.state;
         const { usuario } = this.props;

        return(
            <div className="flex-4 conteudo-area-cliente">
                <h2>MEUS PEDIDOS</h2>   
                <br/>
                <br/><hr/><br/>
                <div className="form-dados">
                    <div>
                        <TextoDados chave="E-Mail" valor={usuario ? usuario.email : ""} />
                    </div>
                    <FormSimples label="Nome" erro={erros.nome} value={nome} name="nome" type="text" placeholder="Nome" onChange={(e) => this.onChange("nome", e.target.value)} />

                    <FormSimples value={CPF} label="CPF" erro={erros.CPF} name="CPF" type="text" er placeholder="CPF - 123.456.789-10" onChange={(e) => this.onChange("CPF", formatCPF(e.target.value))} />
                    <div className="flex horizontal">
                        <div className="flex-1">
                        <FormSimples  value={telefone} erro={erros.telefone} label="Telefone" name="telefone" type="text" placeholder="Telefone" onChange={(e) => this.onChange("telefone", formatTelefone(e.target.value))} />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={dataDeNascimento} erro={erros.dataDeNascimento} name="dataDeNascimento" type="text" placeholder="DD/MM/YYY" label="Data de nascimento" onChange={(e) => this.onChange("dataDeNascimento", formatDataDeNascimento(e.target.value))} />                        
                        </div>
                    </div>
                   
                    <br/>
                    <div className="flex horizontal">
                        <div className="flex-3">
                            <FormSimples value={local} erro={erros.local} name="local" label="Endereço" placeholder="Endereço"  onChange={(e) => this.onChange("local", e.target.value)} />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={numero} name="numero" erro={erros.numero}  placeholder="Número" label="Número" onChange={(e) => this.onChange("numero", formatNumber(e.target.value))} />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={bairro} name="bairro"  erro={erros.local} placeholder="Bairro" label="CPF"Bairro  onChange={(e) => this.onChange("bairro", e.target.value)} />
                        </div>
                        <div className="flex-1">
                            <FormSimples value={complemento} name="complemento"   placeholder="Complemento" label="Complemento" onChange={(e) => this.onChange("complemento", e.target.value)} />
                        </div>
                    </div>
                    <div className="flex horizontal">
                        <div className="flex-1">
                            <FormSimples value={cidade} name="cidade" erro={erros.cidade}  placeholder="Cidade" label="Cidade" label="Cidade"  onChange={(e) => this.onChange("cidade", e.target.value)} />
                        </div>
                        <div className="flex-1">
                            <div className="form-input">
                                <label>Estado</label>
                                    <select name="estado" value={estado } onChange={(e) => this.onChange("estado", e.target.value)}>
                                        <option>Selecione seu estado</option>
                                        { Object.keys(ESTADOS).map((abbr) =>  (<option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                                </select>
                                {
                                    erros.estado && (<small className="erro">{erros.estado}</small>)
                                }
                            </div>
                        </div>
                    </div>
                    <FormSimples value={CEP} name="CEP"  placeholder="12345-789"  erro={erros.CEP} label="CEP" onChange={(e) => this.onChange("CEP", formatCEP(e.target.value))}/>
                    </div> 
                    <br/>
                    <AlertGeral aviso={this.state.aviso} />
                    <div className="flex flex-start">
                        <button className="btn btn-primary"
                        onClick={()=> this.handleSubmit()} >SALVAR</button>
                    </div> 
            </div>
        )
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente
})

export default connect(mapStateToProps, actions)(FormularioDados);