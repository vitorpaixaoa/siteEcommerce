import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';

import { connect } from 'react-redux';
import actions from '../../redux/actions';
import axios from 'axios';

import { ESTADOS } from '../../utils';
import { formatNumber, formatCEP } from '../../utils/format';

class DadosEntregaContainer extends Component {

    state = {
        erros:{ dadosCobranca: {} }
    }

    componentDidMount(){
        this.fetchCliente();
    }

    componentDidUpdate(prevProps){
        if(!prevProps.cliente && this.props.cliente ) this.fetchCliente();
    }

    validate(){
        const { local,numero, bairro, complemento,cidade,estado,CEP, dadosCobranca, dadosEntregaIgualCobranca } = this.props.form;
        const erros = { dadosCobranca: {} };

        if(!local) erros.local = "Preencha aqui com seu endereço";
        if(!numero) erros.numero = "Preencha aqui com seu numero";
        if(!bairro) erros.bairro = "Preencha aqui com seu bairro";
        if(!cidade) erros.cidade = "Preencha aqui com sua cidade";
        if(!estado) erros.estado = "Preencha aqui com seu estado";
        if(!CEP || CEP.length !== 9 ) erros.CEP = "Preencha aqui com seu CEP";

        if(!dadosEntregaIgualCobranca){
            if(!dadosCobranca.local) erros.dadosCobranca.local = "Preencha aqui com seu endereço";
            if(!dadosCobranca.numero) erros.dadosCobranca.numero = "Preencha aqui com seu numero";
            if(!dadosCobranca.bairro) erros.dadosCobranca.bairro = "Preencha aqui com seu bairro";
            if(!dadosCobranca.complemento) erros.dadosCobranca.complemento = "Preencha aqui com o complemento";
            if(!dadosCobranca.cidade) erros.dadosCobranca.cidade = "Preencha aqui com sua cidade";
            if(!dadosCobranca.estado) erros.dadosCobranca.estado = "Preencha aqui com seu estado";
            if(!dadosCobranca.CEP || CEP.length !== 9 ) erros.dadosCobranca.CEP = "Preencha aqui com seu CEP";
        }

        this.setState({ erros });
        return ( Object.keys(erros).length === 1 &&  Object.keys(erros.dadosCobranca).length === 0 ) ;
    }

    onChange =(field, value, prefix ) =>  this.props.setForm({ [field]: value }, prefix).then(() => this.validate());

    onChangeCEP =(field, value, prefix ) =>  {
        this.props.setForm({ [field]: value }, prefix).then(() =>{
            this.validate();
            if(value.length === 9){
                axios.get(`https://viacep.com.br/ws/${value.replace("-","")}/json/unicode`)
                .then((response) => {
                    this.props.setForm({
                        "local": response.data["logradouro"],
                        "bairro": response.data["bairro"],
                        "cidade": response.data["localidade"],
                        "estado": response.data["uf"]
                    }, prefix).then(() => this.validate());
                })
                .catch(e => console.log(e))
            }
        });
    }


    fetchCliente(){
        const { cliente } = this.props;
        this.props.setForm(
            {
                dadosEntregaIgualCobranca: true,
                local: cliente ? cliente.endereco.local : "",
                numero: cliente ? cliente.endereco.numero : "",
                bairro: cliente ? cliente.endereco.bairro : "",
                complemento: cliente ? cliente.endereco.complemento : "",
                cidade: cliente ? cliente.endereco.cidade : "",
                estado: cliente ? cliente.endereco.estado : "",
                CEP: cliente ? cliente.endereco.CEP : "",
                dadosCobranca:{
                    local: cliente ? cliente.endereco.local : "",
                    numero: cliente ? cliente.endereco.numero : "",
                    bairro: cliente ? cliente.endereco.bairro : "",
                    complemento: cliente ? cliente.endereco.complemento : "",
                    cidade: cliente ? cliente.endereco.cidade : "",
                    estado: cliente ? cliente.endereco.estado : "",
                    CEP: cliente ? cliente.endereco.CEP : ""
                }
             }
        );
    }
    
    renderDadosEntrega(){
        if (!this.props.form ) return null;
        const {  
            dadosEntregaIgualCobranca,
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP } = this.props.form;
            const { erros } = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div>
                    <h2>DADOS DE ENTREGA</h2>
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CEP"} 
                        value={ CEP || ""}
                        erro={erros.CEP}
                        label="CEP" 
                        placeholder="12345-678" 
                        onChange={(e) => this.onChangeCEP("CEP", formatCEP(e.target.value) )} />
                </div>
                <div className="flex-1 flex horizontal ">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"local"} 
                            value={local || ""} 
                            erro={erros.local}
                            label="Endereço" 
                            placeholder="Endereço (Rua, Avenida,...)" 
                            onChange={(e) => this.onChange("local", e.target.value)} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"numero"} 
                            value={numero || ""} 
                            erro={erros.numero}
                            label="Número" 
                            placeholder="123" 
                            onChange={(e) => this.onChange("numero", formatNumber(e.target.value))} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 ">
                        <FormSimples 
                            name={"bairro"} 
                            value={bairro || ""} 
                            erro={erros.bairro}
                            label="Bairro" 
                            placeholder="Bairro" 
                            onChange={(e) => this.onChange("bairro",  e.target.value)} />
                    </div>
                    <div className="flex-1 ">
                        <FormSimples 
                            name={"complemento"} 
                            value={complemento || ""} 
                            erro={erros.complemento}
                            label="Complemento" 
                            placeholder="Complemento" 
                            onChange={(e) => this.onChange("complemento",e.target.value)} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"cidade"} 
                            value={cidade || ""} 
                            erro={erros.cidade}
                            label="Cidade" 
                            placeholder="Cidade" 
                            onChange={(e) => this.onChange("cidade", e.target.value)} />
                    </div>
                    <div className="flex-1 flex vertical form-input">
                        <label className="form-input">Estado</label>
                        <select  value={estado || ""} onChange={(e) => this.onChange("estado", e.target.value)} >
                            <option>Selecione...</option>
                            { Object.keys(ESTADOS).map((abbr) => ( <option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                        </select>
                        {
                            erros.estado && ( <small className="erro">{erros.estado}</small>)
                        }
                    </div>
                </div>
                <br/>
                <div>
                    <input 
                    checked={dadosEntregaIgualCobranca  || true} 
                    type="checkbox"
                    onChange={(e) => this.props.setForm({"dadosEntregaIgualCobranca": !dadosEntregaIgualCobranca})}/>
                    <label>&nbsp;Os dados de entrega são iguais aos de cobrança.</label>
                </div>
            </div>
        )
    };

    

    renderDadosCobranca(){
        if (!this.props.form || !this.props.form.dadosCobranca) return null;
        const {
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP } = this.props.form.dadosCobranca;
            const { erros } = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div>
                    <h2>DADOS DE COBRANÇA</h2>
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CEP"} 
                        value={CEP || ""} 
                        erro={erros.dadosCobranca.CEP}
                        label="CEP" 
                        placeholder="12345-678" 
                        onChange={(e) => this.onChangeCEP("CEP", formatCEP(e.target.value), 'dadosCobranca')} />
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"local"} 
                            value={local || ""} 
                            erro={erros.dadosCobranca.local}
                            label="Endereço" 
                            placeholder="Endereço (Rua, Avenida,...)" 
                            onChange={(e) => this.onChange("local", e.target.value, 'dadosCobranca')} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"numero"} 
                            value={numero || ""} 
                            erro={erros.dadosCobranca.numero}
                            label="Número" 
                            placeholder="123" 
                            onChange={(e) => this.onChange("numero", formatNumber(e.target.value), 'dadosCobranca')} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"bairro"} 
                            value={bairro || ""}
                            erro={erros.dadosCobranca.bairro} 
                            label="Bairro" 
                            placeholder="Bairro" 
                            onChange={(e) => this.onChange("bairro", e.target.value, 'dadosCobranca')} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"complemento"} 
                            value={complemento || ""}
                            erro={erros.dadosCobranca.complemento} 
                            label="Complemento" 
                            placeholder="Complemento" 
                            onChange={(e) => this.onChange("complemento", e.target.value, 'dadosCobranca')} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"cidade"} 
                            value={cidade || ""}
                            erro={erros.dadosCobranca.cidade}  
                            label="Cidade" 
                            placeholder="Cidade" 
                            onChange={(e) => this.onChange("cidade", e.target.value, 'dadosCobranca')} />
                    </div>
                    <div className="flex-1 flex vertical form-input">
                        <label >Estado</label>
                        <select value={estado || ""} onChange={(e) => this.onChange("estado", e.target.value, 'dadosCobranca')} >
                            <option>Selecione...</option>
                            { Object.keys(ESTADOS).map((abbr) => ( <option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                        </select>
                        {
                            erros.dadosCobranca.estado && ( <small className="erro">{erros.dadosCobranca.estado}</small>)
                        }
                    </div>
                </div>
            </div>
        )
    };

    
    
    render(){
        const { dadosEntregaIgualCobranca } = this.props.form;

        return (
            <div className="flex-1">
                { this.renderDadosEntrega() }
                { !dadosEntregaIgualCobranca && this.renderDadosCobranca() }
                <br/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    usuario: state.auth.usuario,
    cliente: state.cliente.cliente,
    form: state.checkout.form
});

export default  connect(mapStateToProps, actions)(DadosEntregaContainer);