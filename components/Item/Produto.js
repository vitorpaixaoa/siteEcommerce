import React, { Component } from "react"
import Link from "next/link"
import { baseImg } from "../../config"

import { formatMoney } from "../../utils"
class Produto extends Component {
  render() {
    const { item, porLinha } = this.props
    const { _id, titulo, preco, promocao, fotos } = item
    const temPromo = promocao && preco !== promocao
    console.log("foto: ", fotos)
    return (
      <div
        key={_id}
        className="row justify-content-center text-center product-holder h-100"
      >
        <div>
          <div className="produto-title flex flex-center">
            <h3> {titulo} </h3>
          </div>
          <div
            className={`produto-preco-${
              promocao ? "produto-por" : ""
            } flex flex-center`}
          >
            <h2> {formatMoney(preco)} </h2>
          </div>
          <div className="links-wrapper">
            <ul>
              <li>
                <Link href={`/produto/${titulo}?id=${_id}`}>Veja mais</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="prodict-image">
              <img src={`${baseImg}${fotos[0]}`} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Produto
