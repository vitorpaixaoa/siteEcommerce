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
    console.log('cardQtd', this.state.cardQtd)
    return (
      <>
        <Link href="/area-cliente">
          <Icon>
            <i class="far fa-user fa-1x"></i>
          </Icon>
        </Link>
        <Link href="/carrinho">
            
          <Image alt="bag" src="/static/img-site/bag.svg">
          <span style={{
              color:"white",
              fontSize:'10px',
            }}>{this.state.cardQtd}</span>
          </Image>
        </Link>
      </>
    )
  }
}

export default CardCarrinho
