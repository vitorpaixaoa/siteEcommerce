import React, { Component } from "react"
import Link from "next/link"
import { connect } from "react-redux"
import { FormatCategoryString } from "../../utils/format"
class Categorias extends Component {
  render() {
    const { categorias, isiOSCategory } = this.props
    return (
      <div>
        {categorias.map((categoria) => {
          if (isiOSCategory) {
            if (
              categoria.nome.toLowerCase().includes("iphone-novo") ||
              categoria.nome.toLowerCase().includes("iphone-usado") ||
              categoria.nome.toLowerCase().includes("iphone-condicionado")
            ) {
              return (
                <Link
                  href={`/categoria/${categoria.nome}?id=${categoria._id}`}
                  key={categoria._id}
                >
                  <a key={categoria.id}>
                    {FormatCategoryString(categoria.nome)}
                  </a>
                </Link>
              )
            }
          } else {
            if (
              categoria.nome.toLowerCase().includes("iphone-novo") ||
              categoria.nome.toLowerCase().includes("iphone-usado") ||
              categoria.nome.toLowerCase().includes("iphone-condicionado") ||
              categoria.nome.toLowerCase().includes("xiaomi")
            ) {
              return null
            } else {
              return (
                <Link
                  href={`/categoria/${categoria.nome}?id=${categoria._id}`}
                  key={categoria._id}
                >
                  <a key={categoria.id}>{categoria.nome}</a>
                </Link>
              )
            }
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  categorias: state.categoria.categorias
})

export default connect(mapStateToProps)(Categorias)
