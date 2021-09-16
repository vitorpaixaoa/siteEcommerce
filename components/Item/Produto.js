import React, { Component } from "react"
import Link from "next/link"
import { baseImg } from "../../config"
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
class Produto extends Component {
  render() {
    const { item, porLinha, flexDirection, isSimpleProductShowcase } =
      this.props

    const { _id, titulo, preco, promocao, fotos } = item
    console.log("item: ", item)
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
          <ProductTitle fontSize={isSimpleProductShowcase && 20}>
            {isSimpleProductShowcase ? truncateString(titulo, 50) : titulo}
          </ProductTitle>
          {temPromo ? (
            <>
              <PromotionalProduct> De {formatMoney(preco)} </PromotionalProduct>
              <TextComponent fontSize={fontSizes.large} textAlign="center">
                {" "}
                Por {formatMoney(promocao)}{" "}
              </TextComponent>
            </>
          ) : (
            <TextComponent textAlign="center">
              {" "}
              A partir de {formatMoney(promocao)}{" "}
            </TextComponent>
          )}
          <LinkDiv>
            <ul>
              <li>
                <Link href={`/produto/${titulo}?id=${_id}`}>Veja mais</Link>
                <i class="fas fa-angle-right"></i>
              </li>
            </ul>
          </LinkDiv>
        </Content>
        <ImageContainer
          width={isSimpleProductShowcase && "15vw"}
          height={'auto'}
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

export default Produto
