import React, { Component } from "react"

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
    const { produtos, itensPorLinha } = this.props
    return (
      <div>
        {produtos.map((item, index) => (
          index % 2 === 0 ? (
            <Produto item={item} key={item._id} porLinha={itensPorLinha}  flexDirection={'row'} />  
            ) : (
            <Produto item={item} key={item._id} porLinha={itensPorLinha}  flexDirection={'row-reverse'} />
          )  
        ))}
      </div>
    )
  }
}

export default Produtos
