import React, { Component } from "react"

import Paginas from "../../components/Listas/Paginas"
import RedesSociais from "../../components/Listas/RedesSociais"
import DadosDaLoja from "../../components/Item/DadosDaLoja"
import { Container, Content } from "./styles"
import { scrollTo } from "../../utils/scrollTo"
class Rodape extends Component {
  render() {
    return (
      <Container>
        <Content>
          <img
            onClick={() => scrollTo("HeaderID")}
            src="/static/img-site/LogoV1.svg"
          />
          <Paginas />
          <RedesSociais />
          <DadosDaLoja />
        </Content>
        <div
          style={{
            textAlign: "center"
          }}
        >
          <small>&copy; Take </small>
        </div>
      </Container>
    )
  }
}

export default Rodape
