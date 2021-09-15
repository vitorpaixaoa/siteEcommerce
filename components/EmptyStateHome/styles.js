import styled from "styled-components"
import { colors, fontSizes } from "../../pages/styles/theme"

export const H1 = styled.h1`
  font-size: ${fontSizes.base * 2}px;
  font-weight: 500;
  color: ${({ color = colors.darkGrey }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
  max-width: 500px;
`
export const H3 = styled.h3`
  font-size: ${fontSizes.tiny * 2}px;
  font-weight: 200;
  color: ${({ color = colors.darkGrey }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
  max-width: 500px;
`
export const Image = styled.img`
  width: 25vw;
  height: 50vh;
`
