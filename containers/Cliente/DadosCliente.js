import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormSimples from '../../components/Inputs/FormSimples';
import actions from '../../redux/actions';
import moment from 'moment'
import { validateCPF } from '../../utils/validate';
import { formatDataDeNascimento, formatTelefone, formatCPF } from '../../utils/format';


class DadosClienteContainer extends Component {

    state = {
        erros: {}
    }

     componentDidMount(){
         this.props.setForm({
            email: "",
            senha: "",
            nome: this.props.cliente ? this.props.cliente.nome : "",
            CPF: this.props.cliente ? this.props.cliente.cpf : "",
            telefone: this.props.cliente && this.props.cliente.telefones ? 
                this.props.cliente.telefones[0] : "",
            dataDeNascimento: this.props.cliente ? 
                moment(this.props.cliente.dataDeNascimento).format("DD/MM/YYYY") : ""
        });
        
    }

    componentDidUpdate(prevProps){
        if(!prevProps.cliente && this.props.cliente){
            const { nome, cpf, telefones, dataDeNascimento } = this.props.cliente;
            this.props.setForm({
                nome ,
                CPF:cpf,
                telefone: telefones[0],
                dataDeNascimento:  moment(dataDeNascimento).format("DD/MM/YYYY")
            });
            
        }
    }

    onChange = (field, e, value ) =>{
        this.props.setForm({ [field]: value || e.target.value }, null)
        .then(() => this.validate())
    };
    
    validate(){
        const { email, senha, nome, CPF, dataDeNascimento, telefone } = this.props.form;
        const { usuario } = this.props;
        const erros = {};

        if(!usuario && !email) erros.email = "Preencha aqui com seu email."
        if(!usuario && !senha) erros.senha = "Preencha aqui com sua senha."

        if(!nome) erros.nome = "Preencha aqui com seu nome";
        if(!CPF || CPF.length !== 14 ) erros.CPF = "Preencha aqui com seu CPF";
        if( CPF && CPF.length === 14 && !validateCPF(CPF)) 
            erros.CPF = "Preencha aqui com seu CPF corretamente";
        if(!dataDeNascimento || dataDeNascimento.length !== 10 )   erros.dataDeNascimento = "Preencha aqui com sua data de nascimento.";
        if(!telefone || telefone.length < 11 ) erros.telefone = "Preencha aqui com seu telefone.";
        
        this.setState({ erros })
        return !(Object.keys(erros).length > 0);
    }
    
    renderDadosRegistro(){
        const { email, senha } = this.props.form;
        const {erros} = this.state;
        return(
            <div className="flex-1 flex horizontal" >
                <div className="flex-1">
                    <FormSimples 
                        name={"email"} 
                        value={email} 
                        label="E-mail" 
                        erro={erros.email}
                        placeholder="E-Mail" 
                        onChange={(e) => this.onChange("email", e )} />
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"senha"} 
                        type="password"
                        value={senha} 
                        erro={erros.senha}
                        label="Senha" 
                        placeholder="Senha" 
                        onChange={(e) => this.onChange("senha", e )} />
                </div>
            </div>
        )
    }

    renderDadosUsuario(){
        const { nome, CPF, dataDeNascimento, telefone} = this.props.form;
        const {erros} = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div className="flex-1">
                    <FormSimples 
                        name={"nome" }
                        value={nome || ''} 
                        erro={erros.nome}
                        label="Nome" 
                        placeholder="Nome" 
                        onChange={(e) => this.onChange("nome", e )} />
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CPF"} 
                        value={CPF || ''} 
                        erro={erros.CPF}
                        label="CPF" 
                        placeholder="CPF" 
                        onChange={(e) => this.onChange("CPF", e, formatCPF(e.target.value) )} />
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1">
                        <FormSimples 
                            name={"dataDeNascimento"} 
                            value={dataDeNascimento || ''} 
                            erro={erros.dataDeNascimento}
                            label="Data de Nascimento" 
                            placeholder="DD/MM/AAAA" 
                            onChange={(e) => this.onChange("dataDeNascimento", e, formatDataDeNascimento(e.target.value) )} />
                    </div>
                    <div className="flex-1">
                        <FormSimples 
                            name={"telefone"} 
                            value={telefone || ''} 
                            erro={erros.telefone}
                            label="Telefone/Celular" 
                            placeholder="(34) 1234-5678" 
                            onChange={(e) => this.onChange("telefone", e, formatTelefone(e.target.value) )} />
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
                { !this.props.usuario && this.renderDadosRegistro() }
                { this.renderDadosUsuario() }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    token: state.auth.token,
    cliente: state.cliente.cliente,
    form: state.checkout.form
})

export default connect(mapStateToProps, actions)(DadosClienteContainer)