import React from "react"
import Logo from "../../components/Logo/Cabecalho.js"
import CampoPesquisa from "../../components/Campos/Pesquisa"
import CardCarrinho from "../../components/Cards/Carrinho"
import Categorias from "../../components/Listas/Categorias"
import Link from "next/link"
import actions from "../../redux/actions"
import initialize from "../../utils/initialize"
import callBaseData from "../../utils/callBaseData"
import { connect } from "react-redux"
import {
  CategoryContainer,
  Container,
  SearchImage,
  Icon,
  Options
} from "./styles"
class Cabecalho extends React.Component {
  static async getInitialProps(ctx) {
    initialize(ctx)
    return callBaseData(
      [
        actions.fetchProdutosCategoria.bind(null, ctx.query.id),
        actions.fetchCategoria.bind(null, ctx.query.id)
      ],
      ctx
    )
  }
  state = {
    isOpenSearchBar: false
  }

  returningXiaomiCategory() {
    const { categorias } = this.props
    let url = categorias
      .filter((categoria) => categoria.nome.toLowerCase().includes("xiaomi"))
      .map((categoria) => {
        return `/categoria/${categoria.nome}?id=${categoria._id}`
      })
    return url
  }
  renderCabecalhoNormal() {
    const { isOpenSearchBar } = this.state
    return (
      <Container id="HeaderID">
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
              <ul>
                <li>
                  <a>iPhone</a>
                  <div>
                    <Categorias isiOSCategory />
                  </div>
                </li>
                <li>
                  <a href={this.returningXiaomiCategory()}>Xiaomi</a>
                </li>
                <li>
                  <a>Acessórios</a>
                  <Categorias />
                </li>
                <li>
                  <a>Sobre a loja</a>
                </li>
              </ul>
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
const mapStateToProps = (state) => ({
  categorias: state.categoria.categorias
})

export default connect(mapStateToProps, actions)(Cabecalho)
