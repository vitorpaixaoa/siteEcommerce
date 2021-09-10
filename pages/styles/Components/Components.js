import { colors, fontSizes, Weight } from "../theme"
import styled from "styled-components"
export const TextComponent = styled.span`
  font-size: ${({ fontSize = fontSizes.base }) => fontSize + "px"};
  font-weight: ${({ fontWeight = Weight.ligth }) => fontWeight};
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
  width: ${({ width = "100%" }) => {
    if (typeof width === "string") {
      return width
    } else {
      return width + "px"
    }
  }};
`

export const GroupComponent = styled.div`
  flex-direction: ${({ flexDirection = "column" }) => flexDirection};
  align-items: ${({ alignItem = "flex-start" }) => alignItem};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
  margin-top: ${({ marginTop = 0 }) => marginTop + "px"};
  margin-left: ${({ marginLeft = 0 }) => marginLeft + "px"};
  border-bottom-width: ${({ borderBottomWidth = 0 }) =>
    borderBottomWidth + "px"};
  border-bottom-color: ${({ borderColor = "white" }) => borderColor};
  padding: ${({ padding = 0 }) => padding};
  opacity: ${({ opacity = 1 }) => opacity};
  flex-wrap: ${({ flexWrap = "nowrap" }) => flexWrap};
  display: flex;
  height: ${({ height = "100%" }) => {
    if (typeof height === "string") {
      return height
    }
    return height + "px"
  }};
`

export const Container = styled.div`
  height: ${({ height = "100%" }) => {
    if (typeof height === "string") {
      return height
    }
    return height + "px"
  }};
  background-color: ${({ background = colors.white }) => background};
  opacity: ${({ opacity = 1 }) => opacity};
  display: flex;
  flex-direction: ${({ flexDirection = "column" }) => flexDirection};
  align-items: ${({ alignItem = "flex-start" }) => alignItem};
  justify-content: ${({ justifyContent = "flex-start" }) => justifyContent};
`
