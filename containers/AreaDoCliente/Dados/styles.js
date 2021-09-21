import styled from "styled-components"
import { colors } from "../../../pages/styles/theme"
export const H1 = styled.h1`
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
