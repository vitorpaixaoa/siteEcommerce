import React, { Component } from "react"

import Cabecalho from "../containers/Cabecalho"
import Banners from "../containers/Banners"
import Beneficios from "../containers/Beneficios"
import ProdutosPaginaInicial from "../containers/Lista/ProdutosPaginaInicial"
import Rodape from "../containers/Rodape"

import initialize from "../utils/initialize"
import callBaseData from "../utils/callBaseData"
import { connect } from "react-redux"
import actions from "../redux/actions"
import { Container } from "./styles/Components/Components"
import styled from "styled-components"
export const ExternalContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  transition: transform 0.25s cubic-bezier(0.71, 0.21, 0.72, 0.7);
  transform: ${({ open }) => (open ? "translateY(260px)" : "translateY(0)")};
`
class Index extends Component {
  static async getInitialProps(ctx) {
    initialize(ctx)
    return callBaseData([actions.fetchProdutosPaginaInicial], ctx)
  }

  async componentDidMount() {
    await this.props.getUser({ token: this.props.token })
  }

  state = {
    isOpen: false
  }
  render() {
    const { isOpen } = this.state
    return (
      <Container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Cabecalho />
        <Banners />
        <Beneficios />
        <ProdutosPaginaInicial />
        <Rodape />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.auth.token
})

export default connect(mapStateToProps, actions)(Index)
