import React, { Component } from "react"
import { Container } from "../../pages/styles/Components/Components"

import Produto from "../Item/Produto"

class Produtos extends Component {
  componentDidMount() {
    var highest = 0

    const produtosListados = document.querySelectorAll(".produto-title")

    produtosListados.forEach(function (item) {
      if (highest < item.clientHeight) highest = item.clientHeight
    })
    produtosListados.forEach(function (item) {
      item.style.height = highest + 10 + "px"
    })
  }

  render() {
    const { produtos, itensPorLinha, isSimpleProductShowcase } = this.props

    return (
      <Container
        flexDirection={isSimpleProductShowcase ? "row" : "column"}
        width={isSimpleProductShowcase ? "80%" : "60%"}
        alignItem="center"
        isScrollDiv={isSimpleProductShowcase}
      >
        {produtos.map((item, index) => {
          //Apenas itens com foto aparecerao na home
          if (item.fotos.length === 0 && !isSimpleProductShowcase) return null
          return index % 2 === 0 ? (
            <Produto
              item={item}
              key={item._id}
              porLinha={itensPorLinha}
              isSimpleProductShowcase={isSimpleProductShowcase}
              flexDirection={"row"}
            />
          ) : (
            <Produto
              item={item}
              key={item._id}
              porLinha={itensPorLinha}
              isSimpleProductShowcase={isSimpleProductShowcase}
              flexDirection={"row-reverse"}
            />
          )
        })}
      </Container>
    )
  }
}

export default Produtos
