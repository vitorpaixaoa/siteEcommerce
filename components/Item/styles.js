import styled from "styled-components"
import { colors, fontSizes } from "../../pages/styles/theme"

export const FreteOptions = styled.div`
  margin: 12px 0;
`
export const ValueBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Container = styled.div`
  display: flex;
  align-items: ${({ alignItems = "center" }) => alignItems};
  justify-content: ${({ justifyContent = "space-evenly" }) => justifyContent};
  width: 100%;
  margin: ${({ margin = "40px 0px 40px 0px" }) => margin};
  flex-direction: ${({ flexDirection = "row" }) => flexDirection};
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`
export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 80%;
  li {
    list-style: none;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`
export const ProductTitle = styled.h3`
  font-weight: 500;
  font-size: ${({ fontSize = "1.5rem" }) => fontSize};
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
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.lightGrey};
  padding: 25px 40px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 1rem 0.5rem;
  -webkit-box-shadow: 0px 0px 20px -3px #c4c4c4;
  box-shadow: 0px 0px 20px -3px #c4c4c4;
  transition: all ease-in-out 0.3s;
  &:hover{
    -webkit-box-shadow: 0px 0px 0px 0px #c4c4c4;
  box-shadow: 0px 0px 0px 0px #c4c4c4; 
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
