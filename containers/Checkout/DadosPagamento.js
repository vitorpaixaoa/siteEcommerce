import React, { Component } from 'react';
import FormRadio from '../../components/Inputs/FormRadio';
import FormSimples from '../../components/Inputs/FormSimples';

class DadosPagamento extends Component {

    state = {
        opcaoPagamentoSelecionada: "boleto",
        CPF: ""
    }

    renderOpcoesPagamento(){
        const { opcaoPagamentoSelecionada } = this.state;

        return(
            <div className="flex horizontal">
                    <div className="flex-1">
                        <FormRadio 
                            name="tipo_pagamento_selecionado" 
                            checked={opcaoPagamentoSelecionada === 'boleto'} 
                            onChange={()=> this.setState({ opcaoPagamentoSelecionada : "boleto" })}   
                            label="Boleto Bancário"/> 
                    </div>
                    <div className="flex-1">
                        <FormRadio 
                            name="tipo_pagamento_selecionado" 
                            checked={opcaoPagamentoSelecionada === 'cartao'} 
                            onChange={()=> this.setState({ opcaoPagamentoSelecionada : "cartao" })}
                            label="Cartão de crédito"/> 
                    </div>
                </div>
        )
    }
    onChange = (field, e) => this.setState({ [field]: e.target.value })

    renderPagamentoBoleto(){ 
        const { CPF } = this.state;
        return(
            <div className="Dados-Pagamento">
                <div className="flex-1">
                    <FormSimples 
                        name={"CPF"} 
                        value={CPF} 
                        label="CPF" 
                        placeholder="CPF" 
                        onChange={(e) => this.onChange("CPF", e )} />
                </div>
            </div>
        )
    }

    renderPagamentoCartao(){
        const { nomeCartao, numeroCartao, CVVCartao, mesCartao, anoCartao } = this.state;
        return(
            <div className="Dados-Pagamento">
                <div className="flex-1">
                    <FormSimples 
                        name={"nomeCartao"} 
                        value={nomeCartao} 
                        label="Nome do Titular" 
                        placeholder="Nome como escrito no cartão" 
                        onChange={(e) => this.onChange("nomeCartao", e )} />
                    <div className="flex horizontal">
                        <div className="flex-1">
                        <FormSimples 
                            name={"numeroCartao"} 
                            value={numeroCartao} 
                            label="Número do Cartão" 
                            placeholder="XXXX XXXX XXXX XXXX" 
                            onChange={(e) => this.onChange("numeroCartao", e )} />
                        </div>
                        <div className="flex-1">
                        <FormSimples 
                            name={"CVVCartao"} 
                            value={CVVCartao} 
                            label="Código de segurança" 
                            placeholder="XXX" 
                            onChange={(e) => this.onChange("CVVCartao", e )} />
                        </div>
                    </div>
            </div>
            <div className="for-input">
                <label>Data de validade:</label>
            </div>
            <div className="flex ">
                <FormSimples 
                    name={"mesCartao"} 
                    value={mesCartao} 
                    label="Mês " 
                    placeholder="MM" 
                    onChange={(e) => this.onChange("mesCartao", e )} />
                    <span className="slash-pagamento">/</span>
                    <FormSimples 
                    name={"anoCartao"} 
                    value={anoCartao} 
                    label="Ano " 
                    placeholder="AAAA" 
                    onChange={(e) => this.onChange("anoCartao", e )} />
            </div>
            <br/>
            <div className="form-input">
                <label>Parcelas</label>
            </div>
            <div>
                <select name="parcela">
                    <option>Selecione o número de parcelas.</option>
                    <option>1x de R$ 600,00 sem juros</option>
                    <option>2x de R$ 300,00 sem juros</option>
                    <option>3x de R$ 200,00 sem juros</option>
                    <option>4x de R$ 150,00 sem juros</option>
                    <option>5x de R$ 120,00 sem juros</option>
                    <option>6x de R$ 100,00 sem juros</option>
                </select>
            </div>
        </div>
        )
    }


    render(){
        const { opcaoPagamentoSelecionada } = this.state;
        return(
            <div className="Dados-Pagamento-Container">
                <h2>DADOS DE PAGAMENTO</h2>
                <br/>
                { this.renderOpcoesPagamento()}
                <br/>
                <br/>
                { opcaoPagamentoSelecionada === "boleto" && this.renderPagamentoBoleto() } 
                { opcaoPagamentoSelecionada === "cartao" && this.renderPagamentoCartao() }
            </div>
        )
    }
}
export default DadosPagamento;