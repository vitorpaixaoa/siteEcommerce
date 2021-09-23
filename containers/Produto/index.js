import React, { Component } from "react"

import Hero from "./Hero"
import Descricao from "./Descricao"
import Avaliacoes from "./Avaliacoes"
import ProdutosRelacionados from "./ProdutosRelacionados"
import { Container } from "../../pages/styles/Components/Components"

export default class ProdutoContainer extends Component {
  render() {
    return (
      <Container margin="50px 0 0 0" flexDirection="column" alignItems="center">
        <Hero />
        <Descricao />
        <Avaliacoes />
        <ProdutosRelacionados />
      </Container>
    )
  }
}
