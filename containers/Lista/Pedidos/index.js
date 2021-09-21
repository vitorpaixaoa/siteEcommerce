import React, { Component } from "react"

import {
  GroupComponent,
  TextComponent,
  Divisor
} from "../../../pages/styles/Components/Components"
import Paginacao from "../../../components/Paginacao"
import Pedidos from "../../../components/Listas/Pedidos"
import { connect } from "react-redux"
import actions from "../../../redux/actions"
import { H1, H2 } from "./styles"
class ListaPedidos extends Component {
  state = {
    atual: 0,
    limit: 15
  }

  componentDidMount() {
    this.fetchPedidos()
  }

  componentDidUpdate() {
    const { pedidos } = this.props
    if (!pedidos) this.fetchPedidos()
  }

  fetchPedidos() {
    const { token, cliente, fetchPedidos } = this.props
    const { atual, limit } = this.state
    if (token && cliente) fetchPedidos({ offset: atual, limit, token })
  }

  changePagina = (numeroAtual) =>
    this.setState({ atual: numeroAtual }, () => this.fetchPedidos())

  render() {
    const { pedidos } = this.props
    return (
      <GroupComponent
        alignItem="center"
        justifyContent="space-around"
        flexDirection="column"
        padding="50px"
      >
        <H2 margin="0 0 1rem 0">Meus pedidos</H2>
        <Pedidos pedidos={pedidos ? pedidos.docs : []} />
        <Paginacao
          atual={this.state.atual || 0}
          total={pedidos ? pedidos.total : 0}
          limite={this.state.limit}
          onClick={this.changePagina}
        />
      </GroupComponent>
    )
  }
}
const mapStateToProps = (state) => ({
  pedidos: state.pedido.pedidos,
  token: state.auth.token,
  usuario: state.auth.usuario,
  cliente: state.cliente.cliente
})
export default connect(mapStateToProps, actions)(ListaPedidos)
