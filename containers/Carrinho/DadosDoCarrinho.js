import React, { Component } from 'react';
import { formatMoney } from '../../utils';

import Frete from '../../components/Item/Frete';

class DadosDoCarrinho extends Component {

    renderDadosDoCarrinho(){
        return(
            
            <div className="flex-3 dados-do-carrinho-container">
                
                <div className="dados-do-carrinho-item flex">
                    <div className="flex-1">
                        <p className="headline">Valor do Pedido:</p>
                    </div>
                    <div className="flex-1 flex flex-right">
                        { formatMoney(500.50) }
                    </div>
                </div>
                <Frete  />
                <div className="flex">
                    <div className="dados-do-carrinho-item flex-1">
                        <p className="headline">Valor total:</p>
                    </div>
                        <div className=" dados-do-carrinho-item flex-1 flex flex-right">
                        { formatMoney(550.25) }
                    </div>
                    
                </div>
                <div className="flex flex-right">
                    <button className="btn btn-success btn-cta">
                        <span>Finalizar Pedido</span>
                    </button>
                </div>
            </div>
        )
    }

    render(){
        return(
            <div className="Dados-Do-Carrinho flex horizontal">
                <div className="flex-4"></div>
                { this.renderDadosDoCarrinho () }
            </div>
        )
    }
}
export default DadosDoCarrinho;