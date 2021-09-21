import React, { Component } from "react"

import { connect } from "react-redux"
import actions from "../../redux/actions"

import ListaDeProdutos from "./ListaDeProdutos"
import DadosDoCarrinho from "./DadosDoCarrinho"
import { Container, Title } from "./styles"
import { Button } from "../../pages/styles/Components/Components"
import Link from "next/link"
import { formatMoney } from "../../utils"

class CarrinhoContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { valorTotal: 0 }
  }

  componentDidMount() {
    this.props.setCarrinho()
    const { carrinho } = this.props
    this.setState({
      valorTotal: (carrinho || []).reduce(
        (all, item) =>
          all + Number(item.precoUnitario) * Number(item.quantidade),
        0
      )
    })
  }

  componentDidUpdate(prevProps) {
    const { carrinho } = this.props
    const valor = (carrinho || []).reduce(
      (all, item) => all + Number(item.precoUnitario) * Number(item.quantidade),
      0
    )
    if (this.state.valorTotal !== valor) {
      this.setState({
        valorTotal: valor
      })
    }

    // if (
    //   carrinho &&
    //   carrinho[0] &&
    //   carrinho[0].produto &&
    //   !carrinho[0].produto._id
    // ) {
    //   carrinho.forEach((item, idx) => {
    //     this.props.fetchProdutoCarrinho(item.produto, idx)
    //     this.props.fetchVariacoesCarrinho(
    //       item.variacao._id || item.variacao,
    //       item.produto,
    //       idx
    //     )
    //   })
    // }
  }

  render() {
    return (
      <Container>
        <Title>
          Estes são os pedidos no seu carrinho{" "}
          {formatMoney(this.state.valorTotal)}
        </Title>
        <Link href="/checkout">
          <Button padding="8px 32px" width="20%" background="#FF2A6D">
            <span>Finalizar Pedido</span>
          </Button>
        </Link>
        <ListaDeProdutos />
        <DadosDoCarrinho />
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  carrinho: state.carrinho.carrinho
})

export default connect(mapStateToProps, actions)(CarrinhoContainer)
