import React from "react"
import Logo from "../../components/Logo/Cabecalho.js"
import CampoPesquisa from "../../components/Campos/Pesquisa"
import CardCarrinho from "../../components/Cards/Carrinho"
import Categorias from "../../components/Listas/Categorias"
import actions from "../../redux/actions"
import initialize from "../../utils/initialize"
import callBaseData from "../../utils/callBaseData"
import { connect } from "react-redux"
import {
  CategoryContainer,
  Container,
  SearchImage,
  Icon,
  Options,
  SearchContainer,
  IconDiv,
  CloseMenu
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
    isOpenSearchBar: false,
    isOpenMenu: false
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
    const { isOpenSearchBar, isOpenMenu } = this.state
    return (
      <Container isOpen={isOpenMenu} className="HeaderID" id="HeaderID">
        {isOpenSearchBar ? (
          <SearchContainer>
            <CampoPesquisa />
            <Icon>
              <i
                onClick={() =>
                  this.setState({ isOpenSearchBar: !isOpenSearchBar })
                }
                class="fas fa-times fa-1x"
              ></i>
            </Icon>
          </SearchContainer>
        ) : (
          <>
            <Logo />
            <CategoryContainer isOpen={isOpenMenu}>
              <button
                onClick={() => {
                  this.setState({ isOpenMenu: !isOpenMenu })}}
                className="hamburger"
                id="hamburger"
                type="button"
              >
                <i className="fas fa-bars"></i>
              </button>
              <ul>
                <IconDiv
                  style={{
                    width: "100%"
                  }}
                >
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
                </IconDiv>
                <IconDiv>
                  <SearchImage
                    onClick={() =>
                      this.setState({ isOpenSearchBar: !isOpenSearchBar })
                    }
                    src={"/static/img-site/search.svg"}
                  />
                  <CardCarrinho />
                </IconDiv>
                <CloseMenu>
                  <button
                    onClick={() => {
                      this.setState({ isOpenMenu: !isOpenMenu })}}
                    className="closeMenu"
                    id="closeMenu"
                    type="button"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </CloseMenu>
              </ul>
            </CategoryContainer>
          </>
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
