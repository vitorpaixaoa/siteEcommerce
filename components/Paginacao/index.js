import React from "react"
import { Container, Page } from "./styles"

class Paginacao extends React.Component {
  render() {
    const { atual, total, limite, onClick } = this.props
    const numeroPaginas = Math.ceil(total / limite)
    return (
      <Container>
        {[...Array(numeroPaginas).keys()].map((numero, index) => {
          const numeroAtual = numero * limite
          return (
            <Page
              active={numeroAtual === atual}
              key={index}
              onClick={() => onClick(numeroAtual)}
            >
              {numero + 1}
            </Page>
          )
        })}
      </Container>
    )
  }
}
export default Paginacao
