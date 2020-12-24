import React, { Component } from 'react';
import { formatMoney } from '../../utils';
import Link from 'next/link';

class PedidoCard extends Component{
    render(){
        const { pedido } = this.props;
        const { data, valor, status,id } = pedido;
        return(
            <div className="Pedido-Card flex">
                <div className="flex-1 flex-start">
                    <span>{data}</span>
                </div>
                <div className="flex-1 flex-start">
                    <span>{formatMoney(valor)}</span>
                </div>
                <div className="flex-3 flex-start">
                    <span>{status}</span>
                </div>
                <div className="flex-1 flex-start">
                    <Link href={`/area-cliente/pedido/${id}`}>
                        <span className="btn btn-primary btn-sm">VER DETALHES</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PedidoCard;