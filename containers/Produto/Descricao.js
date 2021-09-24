import React from "react"
import { connect } from "react-redux"
import {
  Container,
  GroupComponent,
  TextComponent
} from "../../pages/styles/Components/Components"
import { colors, fontSizes } from "../../pages/styles/theme"
import { H1, H2 } from "./styles"

class Descricao extends React.Component {
  render() {
    const { produto } = this.props
    return (
      <Container padding="0 25px" margin="0px 0px 50px 0px" width="70%" flexDirection="column">
        <GroupComponent alignItems="center">
          <H2 textAlign="center">Descrição</H2>
        </GroupComponent>
        {produto.descricao.split("\n").map((item, idx) => (
          <TextComponent
            margin="0px 0px 5px 0px"
            fontSize={fontSizes.large}
            color={colors.darkGrey}
            key={idx}
          >
            {item}
          </TextComponent>
        ))}
      </Container>
    )
  }
}

const mapStateToProps = (state) => ({
  produto: state.produto.produto
})

export default connect(mapStateToProps)(Descricao)
