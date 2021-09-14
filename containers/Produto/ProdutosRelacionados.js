import React, { Component } from "react"
import { connect } from "react-redux"

import Produtos from "../../components/Listas/Produtos"
import { Container } from "../../pages/styles/Components/Components"
import actions from "../../redux/actions"
import { H2 } from "./styles"

class ProdutosRelacionados extends Component {
  componentDidMount() {
    if (this.props.produto) {
      this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4)
    }
  }

  componentDidUpdate(prevProps) {
    if (!prevProps.produto && this.props.produto) {
      this.props.fetchProdutosCategoria(this.props.produto.categoria._id, 0, 4)
    }
  }

  render() {
    const { produtosCategoria } = this.props
    return (
      <Container flexDirection="column" alignItem="center">
        <H2 margin="0px 0px 50px 0px">Produtos Relacionados</H2>
        <Produtos
          isSimpleProductShowcase={true}
          produtos={produtosCategoria ? produtosCategoria.docs : []}
          itensPorLinha={4}
        />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produtosCategoria: state.categoria.produtosCategoria,
  produto: state.produto.produto
})

export default connect(mapStateToProps, actions)(ProdutosRelacionados)
