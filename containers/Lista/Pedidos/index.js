import React, { Component } from 'react';

import Paginacao from '../../../components/Paginacao';
import Pedidos from '../../../components/Listas/Pedidos';

const PEDIDOS = [
    {
        id: 82139213,
        data: "10/12/2020",
        valor: 500.90,
        status:"Pago / Entregue"
    },
    {
        id: 2233775,
        data: "15/12/2020",
        valor: 100.90,
        status:"Pago / Em trânsito"
    },
    {
        id: 2233445,
        data: "20/12/2020",
        valor: 394.90,
        status:"Pago / Em separação"
    },
    {
        id: 82139232313,
        data: "22/12/2020",
        valor: 1000.73,
        status:"A pagar / --"
    }
]

class ListaPedidos extends Component {
    state={atual: 0}
    render(){
        return(
            <div className="flex-4 conteudo-area-cliente">
                <h2>MEUS PEDIDOS</h2>
                <br/>
                <Pedidos pedidos={PEDIDOS} />
                <Paginacao
                    atual={ this.state.atual || 0 }
                    total={PEDIDOS.length * 4}
                    limite={PEDIDOS.length}
                    onClick={(numeroAtual) => this.setState({ atual: numeroAtual })} />
            </div>
        )
    }
}
export default ListaPedidos;