import React, { Component } from "react"
import {
  Container,
  GroupComponent
} from "../../pages/styles/Components/Components"
import { colors } from "../../pages/styles/theme"
import { H1, Image, H3 } from "./styles"
export default class EmptyStateHome extends Component {
  render() {
    const { message, secundaryMessage } = this.props
    const imgPath = "/static/img-site/Manutencao.svg"
    return (
      <Container flexDirection="column" alignItems="center" padding="16px">
        <Image src={imgPath} />
        <GroupComponent marginTop={16} alignItems="center">
          <H1 color={colors.black} margin="0px 0px 8px 0px" textAlign="center">
            {message}
          </H1>
          <H3 textAlign="center">{secundaryMessage ?? ""}</H3>
        </GroupComponent>
      </Container>
    )
  }
}
