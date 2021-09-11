import React from "react"

class Paginacao extends React.Component {
  render() {
    const { atual, total, limite, onClick } = this.props
    const numeroPaginas = Math.ceil(total / limite)
    return (
      <div className="Paginacao flex horizontal flex-center">
        {[...Array(numeroPaginas).keys()].map((numero, index) => {
          const numeroAtual = numero * limite
          return (
            <div
              key={index}
              onClick={() => onClick(numeroAtual)}
              className={`paginacao-item ${
                numeroAtual === atual ? "paginacao-item-active" : ""
              }`}
            >
              {numero + 1}
            </div>
          )
        })}
      </div>
    )
  }
}
export default Paginacao
