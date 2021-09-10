import React, { Component } from "react"
import Link from "next/link"
import { getCountItemsCart } from "../../utils/cart"
import { Container, Image, Icon } from "./styles"

class CardCarrinho extends Component {
  state = { cardQtd: 0 }

  componentDidMount() {
    this.setState({ cardQtd: getCountItemsCart() })
  }

  render() {
    return (
      <Container>
        <Link href="/area-cliente">
          <Icon>
            <i class="far fa-user fa-1x"></i>
          </Icon>
        </Link>
        <Link href="/carrinho">
          <Image alt="bag" src="/static/img-site/bag.svg" />
        </Link>
      </Container>
    )
  }
}

export default CardCarrinho
