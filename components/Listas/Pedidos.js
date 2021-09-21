import React, { Component } from "react"
import { Container } from "../../pages/styles/Components/Components"

import Pedido from "../Item/PedidoCard"

class Pedidos extends Component {
  renderCorpo() {
    const pedido = [
      {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      },
      {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      },{
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      },
      {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      },
      {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      }, {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      }, {
        createdAt: "",
        pagamento: "",
        cancelado: "",
        entrega: "",
        _id: ""
      }
    ]
    const { pedidos } = this.props
    return pedido.map((pedido) => <Pedido pedido={pedido} key={pedido._id} />)
  }

  render() {
    return <Container alignItem="center" wrap={'wrap'} >{this.renderCorpo()}</Container>
  }
}

export default Pedidos
