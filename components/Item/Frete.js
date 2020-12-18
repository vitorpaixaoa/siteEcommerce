import React, { Component } from 'react';

class Frete extends Component {

    state={ frete: false}

    renderFormularioCEP(){
        return(
            <div className="flex-1 flex">
                <div className="flex-4">
                    <input defaultValue="" name="CEP" className="campo-frete" />
                </div>
                <div className="flex-1">
                    <button className="btn btn-primary btn-small">CALCULAR</button>
                </div>
                
            </div>
        )
    }

    renderOpcaoSelecionada(){
        return(
            <div className="flex vertical flex-right">
                <h4 className="valor-frete">R$ 20,00 </h4>
                <span className="limpar-CEP">Limpar CEP</span>
            </div>
        )
    }

    renderOpcoesFrete(){
        return(
            <div>
                <select defaultValue="PAC">
                    <option value="PAC">PAC (Até 15 dias úteis) - R$ 18,90</option>
                    <option value="SEDEX">SEDEX (Até 7 dias úteis) - R$ 36,90</option>
                    <option value="SLZ">Entrega imediata - R$ 20,00 </option>
                </select>
            </div>
        )
    }

    render(){
        return(
            <div className="dados-do-carrinho-item flex">
                <div className="flex-1 flex vertical">
                    <p className="headline">Frete</p>
                    { this.state.frete && this.renderOpcoesFrete() }
                </div>
                <div className="flex-1 flex flex-right">
                    { this.state.frete ? this.renderOpcaoSelecionada() : this.renderFormularioCEP() }
                </div>
            </div>
        )
    }
}

export default Frete;