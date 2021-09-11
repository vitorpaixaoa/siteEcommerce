import React, { Component } from "react"
import { connect } from "react-redux"

import Produtos from "../../../components/Listas/Produtos"
import Paginacao from "../../../components/Paginacao"
import actions from "../../../redux/actions"
import { H1 } from "./styles"
import { Container } from "../../../pages/styles/Components/Components"
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
        alignItem="center"
        flexDirection="column"
      >
        <H1 textAlign="center">{categoria ? categoria.nome : "-"}</H1>
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
