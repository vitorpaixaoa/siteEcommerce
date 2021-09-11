import React, { Component } from "react"
import Link from "next/link"
import { baseImg } from "../../config"
import {Container, Content, ImageContainer, ProductTitle, PromotionalProduct, LinkDiv} from './styles'
import { formatMoney } from "../../utils"
import { TextComponent } from "../../pages/styles/Components/Components"
class Produto extends Component {
  render() {
    const { item, porLinha, flexDirection } = this.props
    const { _id, titulo, preco, promocao, fotos } = item
    console.log('item: ', item)
    const temPromo = promocao && preco !== promocao
    return (
      <Container
        key={_id}
        flexDirection={flexDirection}
      >
        <Content>
            <ProductTitle> {titulo} </ProductTitle>
            {temPromo ? (
              <>
              <PromotionalProduct> De {formatMoney(preco)} </PromotionalProduct>
              <TextComponent textAlign="center" > Por {formatMoney(promocao)} </TextComponent>
              </>
              ):(
                <TextComponent textAlign="center" > A partir de {formatMoney(promocao)} </TextComponent>
              ) } 
          <LinkDiv>
            <ul>
              <li>
                <Link href={`/produto/${titulo}?id=${_id}`}>Veja mais</Link>
                <i class="fas fa-angle-right"></i>           
                </li>
            </ul>
          </LinkDiv>
        </Content>
              <ImageContainer src={`${baseImg}${fotos[0]}`} />
      </Container>
    )
  }
}

export default Produto
