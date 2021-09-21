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
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
export const MenuOptions = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 25px 0 0;
  width: 100%;
  div {
    transition: all ease-in-out 0.5s;
    display: flex;
    align-items: center;
    &:hover {
      color: ${colors.red};
      transform: translateX(2px);
    }

    i {
      font-size: 0.7rem;
    }
  }
  a {
    text-decoration: none;
    color: ${colors.darkGrey};
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
    font-weight: 700;
    transition: all ease-in-out 0.5s;
    cursor: pointer;
    display: flex;
    &:hover {
      color: ${colors.red};
    }
  }
`
