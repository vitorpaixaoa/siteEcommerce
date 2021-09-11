import styled from "styled-components"
import { colors, fontSizes } from "../../../pages/styles/theme"
export const H1 = styled.h1`
  font-size: ${fontSizes.largeTitle * 2}px;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
