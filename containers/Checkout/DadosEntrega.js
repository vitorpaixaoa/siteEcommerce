import React, { Component } from 'react';
import FormSimples from '../../components/Inputs/FormSimples';
import { ESTADOS } from '../../utils';

export default class DadosEntregaContainer extends Component {
    
    state= {
       dadosEntregaIgualCobranca: true,
       local:"",
       numero:"",
       bairro:"",
       complemento:"",
       cidade:"",
       estado:"",
       CEP:"",
       dadosCobranca:{
        local:"",
        numero:"",
        bairro:"",
        complemento:"",
        cidade:"",
        estado:"",
        CEP:""
       }
    }

    onChange =(field, e) =>  this.setState({ [field]: e.target.value });
    onChangeCobranca =(field, e) => {
        const { state } = this;
        state.dadosCobranca[field] = e.target.value;
        this.setState(state);
    };
    
    renderDadosEntrega(){
        const {  dadosEntregaIgualCobranca,
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP } = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div>
                    <h2>DADOS DE ENTREGA</h2>
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CEP"} 
                        value={CEP} 
                        label="CEP" 
                        placeholder="12345-678" 
                        onChange={(e) => this.onChange("CEP", e )} />
                </div>
                <div className="flex-1 flex horizontal ">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"local"} 
                            value={local} 
                            label="Endereço" 
                            placeholder="Endereço (Rua, Avenida,...)" 
                            onChange={(e) => this.onChange("local", e )} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"numero"} 
                            value={numero} 
                            label="Número" 
                            placeholder="123" 
                            onChange={(e) => this.onChange("numero", e )} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 ">
                        <FormSimples 
                            name={"bairro"} 
                            value={bairro} 
                            label="Bairro" 
                            placeholder="Bairro" 
                            onChange={(e) => this.onChange("bairro", e )} />
                    </div>
                    <div className="flex-1 ">
                        <FormSimples 
                            name={"complemento"} 
                            value={complemento} 
                            label="Complemento" 
                            placeholder="Complemento" 
                            onChange={(e) => this.onChange("complemento", e )} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"cidade"} 
                            value={cidade} 
                            label="Cidade" 
                            placeholder="Cidade" 
                            onChange={(e) => this.onChange("cidade", e )} />
                    </div>
                    <div className="flex-1 flex vertical form-input">
                        <label className="form-input">Estado</label>
                        <select  value={estado} onChange={(e) => this.onChange("estado", e )} >
                            <option>Selecione...</option>
                            { Object.keys(ESTADOS).map((abbr) => ( <option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                        </select>
                    </div>
                </div>
                <br/>
                <div>
                    <input 
                    checked={dadosEntregaIgualCobranca} 
                    type="checkbox"
                    onChange={(e) => this.setState({"dadosEntregaIgualCobranca": !dadosEntregaIgualCobranca})}/>
                    <label>&nbsp;Os dados de entrega são iguais aos de cobrança.</label>
                </div>
            </div>
        )
    };

    

    renderDadosCobranca(){
        const {
            local,
            numero,
            bairro,
            complemento,
            cidade,
            estado,
            CEP } = this.state;
        return(
            <div className="flex-1 flex vertical" >
                <div>
                    <h2>DADOS DE COBRANÇA</h2>
                </div>
                <div className="flex-1">
                    <FormSimples 
                        name={"CEP"} 
                        value={CEP} 
                        label="CEP" 
                        placeholder="12345-678" 
                        onChange={(e) => this.onChangeCobranca("CEP", e )} />
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"local"} 
                            value={local} 
                            label="Endereço" 
                            placeholder="Endereço (Rua, Avenida,...)" 
                            onChange={(e) => this.onChangeCobranca("local", e )} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"numero"} 
                            value={numero} 
                            label="Número" 
                            placeholder="123" 
                            onChange={(e) => this.onChangeCobranca("numero", e )} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"bairro"} 
                            value={bairro} 
                            label="Bairro" 
                            placeholder="Bairro" 
                            onChange={(e) => this.onChangeCobranca("bairro", e )} />
                    </div>
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"complemento"} 
                            value={complemento} 
                            label="Complemento" 
                            placeholder="Complemento" 
                            onChange={(e) => this.onChangeCobranca("complemento", e )} />
                    </div>
                </div>
                <div className="flex-1 flex horizontal">
                    <div className="flex-1 flex">
                        <FormSimples 
                            name={"cidade"} 
                            value={cidade} 
                            label="Cidade" 
                            placeholder="Cidade" 
                            onChange={(e) => this.onChangeCobranca("cidade", e )} />
                    </div>
                    <div className="flex-1 flex vertical form-input">
                        <label >Estado</label>
                        <select value={estado} onChange={(e) => this.onChangeCobranca("estado", e )} >
                            <option>Selecione...</option>
                            { Object.keys(ESTADOS).map((abbr) => ( <option key={abbr} value={abbr} >{ESTADOS[abbr]}</option>))}
                        </select>
                    </div>
                </div>
            </div>
        )
    };

    
    
    render(){
        const { dadosEntregaIgualCobranca } = this.state;

        return (
            <div className="flex-1">
                { this.renderDadosEntrega() }
                { !dadosEntregaIgualCobranca && this.renderDadosCobranca() }
                <br/>
            </div>
        );
    }
}