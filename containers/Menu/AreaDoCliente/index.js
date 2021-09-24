import React, { Component } from "react"
import Link from "next/link"
import { withRouter } from "next/router"
import { connect } from "react-redux"
import actions from "../../../redux/actions"
import {
  GroupComponent,
  TextComponent
} from "../../../pages/styles/Components/Components"

import { H1, H2, MenuOptions } from "./styles"
import { colors } from "../../../pages/styles/theme"
class MenuAreaDoCliente extends Component {
  componentDidMount() {
    this.fetchCliente()
  }
  componentDidUpdate() {
    this.fetchCliente()
  }

  fetchCliente() {
    const { usuario, token, cliente } = this.props
    if (usuario && token && !cliente) {
      this.props.fetchCliente(usuario._id, token)
    }
  }

  renderCabecalho() {
    const { cliente } = this.props
    return (
      <GroupComponent
        alignItems="center"
        justifyContent="space-around"
        flexDirection="row"
        padding="50px"
      >
        <GroupComponent>
          <H1 margin="0 0 25px 0 ">Oi, {cliente ? cliente.nome : "Cliente"}</H1>
          <H2 color={colors.darkGrey}>Seja bem-vindo a Área do Cliente.</H2>
          <TextComponent color={colors.darkGrey}>
            Por aqui você pode acompanhar seus pedidos e também alterar seus
            dados de acesso e senha.
          </TextComponent>
        </GroupComponent>
        {this.renderMenu()}
      </GroupComponent>
    )
  }

  renderMenu() {
    const url = this.props.router.pathname
    const estaEmDados = url.includes("/area-cliente/dados")
    const estaEmAlterarSenha = url.includes("/area-cliente/alterar-senha")
    const estaEmPedidos = !estaEmDados && !estaEmAlterarSenha

    return (
      <MenuOptions>
        <Link href="/area-cliente">
          <div style={{ transform: estaEmPedidos && "none" }}>
            <a style={{ color: estaEmPedidos && colors.red }}>Meus pedidos</a>
            <i
              style={{
                color: estaEmPedidos && colors.red,
                opacity: estaEmPedidos && 1
              }}
              class="fas fa-angle-right"
            ></i>
          </div>
        </Link>
        <Link href="/area-cliente/dados">
          <div style={{ transform: estaEmDados && "none" }}>
            <a style={{ color: estaEmDados && colors.red, transform: "none" }}>
              Meus dados
            </a>
            <i
              style={{ color: estaEmDados && colors.red }}
              class="fas fa-angle-right"
            ></i>
          </div>
        </Link>
        <Link href="/area-cliente/alterar-senha">
          <div style={{ transform: estaEmAlterarSenha && "none" }}>
            <a style={{ color: estaEmAlterarSenha && colors.red }}>
              Alterar senha
            </a>
            <i
              style={{ color: estaEmAlterarSenha && colors.red }}
              class="fas fa-angle-right"
            ></i>
          </div>
        </Link>
        <div style={{ transform: estaEmDados && "none" }}>
          <a onClick={() => this.props.logoutCliente()}>Encerrar sessão</a>
          <i class="fas fa-angle-right"></i>
        </div>
      </MenuOptions>
    )
  }

  render() {
    return <div>{this.renderCabecalho()}</div>
  }
}

const mapStateToProps = (state) => ({
  usuario: state.auth.usuario,
  token: state.auth.token,
  cliente: state.cliente.cliente
})
export default connect(mapStateToProps, actions)(withRouter(MenuAreaDoCliente))
