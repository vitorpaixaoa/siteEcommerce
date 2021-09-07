import React from "react"
import Logo from "../../components/Logo/Cabecalho.js"
import CampoPesquisa from "../../components/Campos/Pesquisa"
import CardCarrinho from "../../components/Cards/Carrinho"
import Categorias from "../../components/Listas/Categorias"
import { CategoryContainer, Container } from "./styles"
class Cabecalho extends React.Component {
  renderCabecalhoNormal() {
    return (
      <Container>
        <Logo />
        <CategoryContainer>
          <Categorias />
        </CategoryContainer>
        <CampoPesquisa />
        <CardCarrinho />
      </Container>
    )
  }

  renderCabecalhoSimples() {
    return (
      <div className="Header No-Links Header-Simples">
        <div className="header-wrapper">
          <Logo />
        </div>
      </div>
    )
  }

  render() {
    const { simples } = this.props
    return simples
      ? this.renderCabecalhoSimples()
      : this.renderCabecalhoNormal()
  }
}

export default Cabecalho
