import React, { Component } from "react"

import Hero from "./Hero"
import Descricao from "./Descricao"
import Avaliacoes from "./Avaliacoes"
import ProdutosRelacionados from "./ProdutosRelacionados"
import { Container } from "../../pages/styles/Components/Components"

export default class ProdutoContainer extends Component {
  state = {
    windowScreenWidth: 0
  }

  componentDidMount() {
    this.setState({ windowScreenWidth: window.screen.width })
  }

  render() {
    return (
      <Container
        padding={this.state.windowScreenWidth <= 360 && "0 1rem 0 1rem"}
        flexDirection="column"
        alignItems="center"
        margin="50px 0 0 0"
      >
        <Hero />
        <Descricao />
        <Avaliacoes />
        <ProdutosRelacionados />
      </Container>
    )
  }
}
