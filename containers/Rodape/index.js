import React, { Component } from "react"

import Paginas from "../../components/Listas/Paginas"
import RedesSociais from "../../components/Listas/RedesSociais"
import DadosDaLoja from "../../components/Item/DadosDaLoja"
import { Container, Content } from "./styles"
class Rodape extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Paginas />
          <RedesSociais />
          <DadosDaLoja />
        </Content>
      </Container>
    )
  }
}

export default Rodape
