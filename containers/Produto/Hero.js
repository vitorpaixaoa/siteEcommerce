import React, { Component } from "react"
import { connect } from "react-redux"
import router, { withRouter } from "next/router"
import { formatMoney } from "../../utils"
import { baseImg } from "../../config"
import { addCart } from "../../utils/cart"
import {
  Container,
  TextComponent,
  Divisor
} from "../../pages/styles/Components/Components"
import {
  Img,
  MiniImageContainer,
  H1,
  OptionContainer,
  OptionContent,
  H2,
  PromotionalProduct,
  CreditPayment,
  QuantityContainer
} from "./styles"
import { colors, fontSizes } from "../../pages/styles/theme"
import Button from "../../components/Button"
class Hero extends Component {
  constructor(props) {
    super()
    const { produto, variacoes } = props
    this.myRef = React.createRef()
    this.state = {
      foto: produto ? produto.fotos[0] || null : null,
      fotos: produto ? produto.fotos || [] : [],
      qtd: 1,
      variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
      variacaoCompleta: variacoes && variacoes.length >= 1 ? variacoes[0] : null
    }
  }

  componentDidMount() {
    const { variacoes, produto } = this.props
    this.setVariacao(produto, variacoes[0] || 0)
  }

  handleBackClick() {
    this.myRef.current.scrollIntoView({ behavior: "smooth" })
  }
  componentDidUpdate(prevProps) {
    const { produto, variacoes } = this.props
    if (router.query.id !== prevProps.router.query.id) {
      if (!prevProps.produto && this.props.produto) {
        const { fotos } = this.props.produto
        this.setState({ foto: fotos[0], fotos })
      }
      if (!prevProps.variacoes && this.props.variacoes) {
        const variacao = this.props.variacoes[0]
        if (!variacao) return null
        this.setState({ variacao: variacao._id, variacaoCompleta: variacao })
      }
      this.setState({
        foto: produto ? produto.fotos[0] || null : null,
        fotos: produto ? produto.fotos || [] : [],
        qtd: 1,
        variacao: variacoes && variacoes.length >= 1 ? variacoes[0]._id : null,
        variacaoCompleta:
          variacoes && variacoes.length >= 1 ? variacoes[0] : null
      })
      this.setVariacao(produto, variacoes[0] || 0)
    }
    this.handleBackClick()
  }

  renderPhotos() {
    return (
      <Container flexDirection="column" alignItems="center">
        <div className="foto-principal flex-6 flex flex-center">
          <Img
            src={
              (baseImg + this.state.foto).includes("undefined")
                ? "/static/img-site/SemImagem.jpg"
                : baseImg + this.state.foto
            }
            width="100%"
          />
        </div>
        <MiniImageContainer isScrollDiv>
          {this.state.fotos.map((foto, index) => (
            <Img
              border={
                this.state.foto === foto
                  ? `1px solid ${colors.red}`
                  : `1px solid ${colors.darkGrey}`
              }
              key={index}
              opacity={this.state.foto === foto ? 1 : 0.7}
              onClick={() => this.setState({ foto })}
              src={baseImg + foto}
              width="100px"
              height="120px"
            />
          ))}
        </MiniImageContainer>
      </Container>
    )
  }

  addCart() {
    const { variacao, qtd, variacaoCompleta } = this.state
    const { produto } = this.props
    addCart(
      {
        produto: produto._id,
        variacao,
        quantidade: qtd,
        precoUnitario: variacaoCompleta
          ? variacaoCompleta.promocao || variacaoCompleta.preco
          : produto.promocao || produto.preco
      },
      true
    )
  }

  setVariacao = (produto, variacao) => {
    this.setState({ variacao: variacao._id, variacaoCompleta: variacao })
    if (variacao.fotos && variacao.fotos.length > 0) {
      this.setState({ fotos: variacao.fotos, foto: variacao.fotos[0] })
    } else {
      this.setState({ fotos: produto.fotos, foto: produto.fotos[0] })
    }
  }

  renderVariacoes() {
    const { variacoes, produto } = this.props
    if (!produto || !variacoes || variacoes.length === 0) return null
    return (
      <div>
        <div
          style={{
            paddingLeft: window.screen.width <= 360 ? "1rem" : "0"
          }}
        >
          <TextComponent
            fontSize={fontSizes.large}
            color={colors.darkGrey}
            textAlign="center"
          >
            Selecione uma opção:
          </TextComponent>
        </div>
        <OptionContainer>
          {variacoes.map((variacao, index) => (
            <OptionContent
              border={
                this.state.fotos[0] === variacao.fotos[0]
                  ? `2px solid ${colors.red}`
                  : `2px solid ${colors.darkGrey}`
              }
              width="120px"
              height="100px"
              key={variacao._id}
              onClick={() => this.setVariacao(produto, variacao)}
            >
              <TextComponent color={colors.darkGrey} textAlign="center">
                {variacao.nome}
              </TextComponent>
            </OptionContent>
          ))}
        </OptionContainer>
      </div>
    )
  }

  renderDetalhes() {
    const { produto } = this.props
    const { variacaoCompleta } = this.state
    if (!produto) return null
    return (
      <Container
        justifyContent="space-between"
        alignItems="flex-start"
        padding="0 25px"
        flexDirection="column"
      >
        <H1 margin="0px 0px 20px 0px">Comprar {produto.titulo}</H1>

        {this.renderVariacoes()}
        <Container
          height="50vh"
          flexDirection="column"
          background={colors.lightGrey}
          margin="40px 0px 0px 0px"
          padding="25px"
          width="25vw"
          justifyContent="space-around"
        >
          {variacaoCompleta ? (
            <div>
              {variacaoCompleta.promocao &&
              variacaoCompleta.promocao !== variacaoCompleta.preco ? (
                <>
                  <H2>
                    {formatMoney(variacaoCompleta.promocao * this.state.qtd)}
                  </H2>
                  <PromotionalProduct>
                    {formatMoney(variacaoCompleta.preco)}
                  </PromotionalProduct>
                </>
              ) : (
                <H2>{formatMoney(variacaoCompleta.preco)}</H2>
              )}
              <CreditPayment className="preco-parcelado ">
                Ou em até 6x de{" "}
                {formatMoney(
                  ((variacaoCompleta.promocao || variacaoCompleta.preco) *
                    this.state.qtd) /
                    6
                )}{" "}
                sem juros
              </CreditPayment>
            </div>
          ) : (
            <div>
              <H2>{formatMoney(produto.preco)}</H2>
              {produto.promocao && produto.promocao !== produto.preco && (
                <H2>{formatMoney(produto.promocao)}</H2>
              )}
              <CreditPayment>
                Ou em até 6x de
                {formatMoney((produto.promocao || produto.preco) / 6)} sem juros
              </CreditPayment>
            </div>
          )}
          <Divisor
            margin="20px 0px 40px 0px"
            height={1}
            background={colors.secondaryBlue}
          />
          <QuantityContainer>
            <label className="opcao-tab">Quantidade: </label>
            {true ? (
              <input
                type="number"
                name="quantidade"
                value={this.state.qtd}
                onChange={(e) =>
                  Number(e.target.value) >= 1 &&
                  this.setState({ qtd: e.target.value })
                }
              />
            ) : (
              <select
                type="number"
                name="quantidade"
                value={this.state.qtd}
                onChange={(e) =>
                  Number(e.target.value) >= 1 &&
                  this.setState({ qtd: e.target.value })
                }
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={"+5"}>+5</option>
              </select>
            )}
          </QuantityContainer>
          <Button
            background={colors.red}
            ColorButton={colors.red}
            ButtonLabelColor={colors.white}
            onSubmit={() => this.addCart()}
          >
            COMPRAR
          </Button>
        </Container>
      </Container>
    )
  }

  render() {
    return (
      <Container ref={this.myRef} width="70vw" margin="50px 0px">
        {this.renderPhotos()}
        {this.renderDetalhes()}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto,
  variacoes: state.produto.variacoes
})

export default connect(mapStateToProps)(withRouter(Hero))
