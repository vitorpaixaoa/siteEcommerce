import React, { Component } from "react"
import Link from "next/link"
import { baseImg } from "../../config"
import router, { withRouter } from "next/router"
import {
  Container,
  Content,
  ImageContainer,
  ProductTitle,
  PromotionalProduct,
  LinkDiv
} from "./styles"
import { formatMoney } from "../../utils"
import { TextComponent } from "../../pages/styles/Components/Components"
import { fontSizes } from "../../pages/styles/theme"
import { truncateString } from "../../utils/format"
import { scrollTo } from "../../utils/scrollTo"
class Produto extends Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.produto && this.props.produto) {
      const { fotos } = this.props.produto
      this.setState({ foto: fotos[0], fotos })
    }
    if (!prevProps.variacoes && this.props.variacoes) {
      const variacao = this.props.variacoes[0]
      if (!variacao) return null
      this.setState({ variacao: variacao._id, variacaoCompleta: variacao })
    }
  }
  render() {
    const { item, flexDirection, isSimpleProductShowcase, router } = this.props
    const { _id, titulo, preco, promocao, fotos } = item
    const temPromo = promocao && preco !== promocao
    const productURL = baseImg + fotos[0]
    return (
      <Container
        key={_id}
        flexDirection={
          isSimpleProductShowcase ? "column-reverse" : flexDirection
        }
      >
        <Content>
          <ProductTitle fontSize={isSimpleProductShowcase && "1rem"}>
            {titulo
              ? isSimpleProductShowcase
                ? truncateString(titulo, 50)
                : titulo
              : "Indisponível no momento"}
          </ProductTitle>
          {preco ? (
            temPromo ? (
              <>
                <PromotionalProduct>
                  {" "}
                  De {formatMoney(preco)}{" "}
                </PromotionalProduct>
                <TextComponent fontSize={fontSizes.large} textAlign="center">
                  {" "}
                  Por {formatMoney(promocao)}{" "}
                </TextComponent>
              </>
            ) : (
              <TextComponent fontSize={fontSizes.large} textAlign="center">
                {" "}
                A partir de {formatMoney(promocao)}{" "}
              </TextComponent>
            )
          ) : (
            "Indisponível no momento"
          )}
          <LinkDiv>
            <ul>
              {titulo && _id ? (
                <li>
                  <Link scroll={false} href={`/produto/${titulo}?id=${_id}`}>
                    Veja mais
                  </Link>
                  <i class="fas fa-angle-right"></i>
                </li>
              ) : (
                <span>Indisponível no momento</span>
              )}
            </ul>
          </LinkDiv>
        </Content>
        <ImageContainer
          width={isSimpleProductShowcase && "15vw"}
          height={"auto"}
          src={
            !productURL.includes("undefined")
              ? productURL
              : "/static/img-site/SemImagem.jpg"
          }
          margin={isSimpleProductShowcase && "0px 0px 16px 0px"}
        />
      </Container>
    )
  }
}

export default withRouter(Produto)
