import React, { Component } from "react"
import { connect } from "react-redux"

import Produtos from "../../../components/Listas/Produtos"
import Paginacao from "../../../components/Paginacao"
import actions from "../../../redux/actions"
import { Container, TextComponent } from "../../../pages/styles/Components/Components"
import { fontSizes } from "../../../pages/styles/theme"
class ProdutosCategoria extends Component {
  state = { atual: 0, limite: 20 }

  changeNumeroAtual = (atual) => {
    this.setState({ atual }, () => this.getProduto())
  }

  getProduto() {
    const { atual, limit } = this.state
    const { categoria } = this.props

    this.props.fetchProdutosCategoria(categoria._id, atual, limit)
  }

  render() {
    const { categoria, produtosCategoria } = this.props
    return (
      <Container
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        margin="50px 0 0 0"
      >
        <TextComponent fontSize={fontSizes.largeTitle * 2} margin="64px 0 16px" textAlign="center">{categoria ? categoria.nome : "-"}</TextComponent>
        <Produtos
          produtos={produtosCategoria ? produtosCategoria.docs : []}
          itensPorLinha={4}
        />
        <Paginacao
          atual={this.state.atual || 0}
          total={produtosCategoria.total}
          limite={this.state.limite}
          onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  categoria: state.categoria.categoria,
  produtosCategoria: state.categoria.produtosCategoria
})

export default connect(mapStateToProps, actions)(ProdutosCategoria)
