import React, { Component } from "react"
import { connect } from "react-redux"

import Produtos from "../../../components/Listas/Produtos"
import { Container } from "../../../pages/styles/Components/Components"
import { TitlePage } from "./styles"
class ProdutosPaginaInicial extends Component {
  render() {
    return (
      <Container alignItem="center">
        <TitlePage>Lançamentos</TitlePage>
        <Produtos
          produtos={this.props.produtos ? this.props.produtos.docs : []}
          itensPorLinha={4}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produtos: state.produto.produtos
})
export default connect(mapStateToProps)(ProdutosPaginaInicial)
