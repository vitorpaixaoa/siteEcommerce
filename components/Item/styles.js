import styled from "styled-components"
import { colors, fontSizes } from "../../pages/styles/theme"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 40px 0px 40px 0px;
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  li {
    list-style: none;
  }
`
export const ProductTitle = styled.h3`
  font-weight: 500;
  font-size: ${({ fontSize = 28 }) => fontSize + "px"};
  margin: 0px 36px 10px 36px;
  color: ${colors.darkGrey};
`

export const PromotionalProduct = styled.span`
  font-size: ${fontSizes.base}px;
  text-decoration: line-through;
  color: #a19f9f;
`

export const ImageContainer = styled.img`
  width: ${({ width = "30vw" }) => width};
  height: ${({ height = "80vh" }) => height};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
`
export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    padding-top: 10px;
    display: flex;
    align-items: center;
    color: ${colors.red};
    text-decoration: none;
    font-size: 0.8rem;
    li a {
      padding-top: 40px;
      color: ${colors.red};
      text-decoration: none;
    }
    i {
      margin-left: 5px;
    }
  }
`
