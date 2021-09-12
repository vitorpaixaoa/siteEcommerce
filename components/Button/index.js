import React, { Component } from "react"
import { Container } from "./styles"

class Button extends Component {
  render() {
    const {
      onSubmit,
      ButtonBorderColor,
      ColorButton,
      ButtonLabelColor,
      children,
      background
    } = this.props
    return (
      <Container
        onClick={onSubmit}
        ColorButton={ColorButton}
        ButtonLabelColor={ButtonLabelColor}
        ButtonBorderColor={ButtonBorderColor}
        background={background}
      >
        {children}
      </Container>
    )
  }
}
export default Button
