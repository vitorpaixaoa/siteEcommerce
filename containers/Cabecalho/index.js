import React from "react"
import Logo from "../../components/Logo/Cabecalho.js"
import CampoPesquisa from "../../components/Campos/Pesquisa"
import CardCarrinho from "../../components/Cards/Carrinho"
import Categorias from "../../components/Listas/Categorias"
import {
  CategoryContainer,
  Container,
  SearchImage,
  Icon,
  Options
} from "./styles"
class Cabecalho extends React.Component {
  state = {
    isOpenSearchBar: false
  }
  renderCabecalhoNormal() {
    const { isOpenSearchBar } = this.state
    return (
      <Container>
        {isOpenSearchBar ? (
          <>
            <CampoPesquisa />
            <Icon>
              <i
                onClick={() =>
                  this.setState({ isOpenSearchBar: !isOpenSearchBar })
                }
                class="fas fa-times fa-1x"
              ></i>
            </Icon>
          </>
        ) : (
          <Options isOpenSearchBar={isOpenSearchBar}>
            <Logo />
            <CategoryContainer>
              <Categorias />
            </CategoryContainer>
            <SearchImage
              onClick={() =>
                this.setState({ isOpenSearchBar: !isOpenSearchBar })
              }
              src={"/static/img-site/search.svg"}
            />
            <CardCarrinho />
          </Options>
        )}
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
