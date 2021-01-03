import React, { Component } from 'react';
import { formatMoney } from '../../utils';
import Link from 'next/link';
import moment from 'moment';

class PedidoCard extends Component{
    render(){
        const { pedido } = this.props;
        const { createdAt, pagamento, cancelado ,entrega, _id } = pedido;
        return(
            <div className="Pedido-Card flex">
                <div className="flex-1 flex-start">
                    <span>{moment(createdAt).format("DD/MM/YYYY")}</span>
                </div>
                <div className="flex-1 flex-start">
                    <span>{formatMoney(pagamento.valor)}</span>
                </div>
                <div className="flex-3 flex-start">
                    <span>{ cancelado ? "Cancelado" : `${pagamento.status} / ${entrega.status}`}</span>
                </div>
                <div className="flex-1 flex-start">
                    <Link href={`/area-cliente/pedido/${_id}`}>
                        <span className="btn btn-primary btn-sm">VER DETALHES</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default PedidoCard;