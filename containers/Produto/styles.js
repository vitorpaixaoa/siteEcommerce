import styled from "styled-components"
import { colors, fontSizes } from "../../pages/styles/theme"

export const Img = styled.img`
  width: ${({ width = "250px" }) => width};
  height: ${({ height = "300px" }) => height};
  margin: 10px 15px;
  border: ${({ border = "0px solid #999999" }) => border};
  cursor: pointer;
  opacity: ${({ opacity = 1 }) => opacity};
  border-radius: 10px;
  padding: 10px;
`
export const MiniImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const H1 = styled.h1`
  font-size: ${fontSizes.largeTitle * 2}px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
export const H2 = styled.h2`
  font-size: ${fontSizes.largeTitle * 2}px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  color: ${({ color = colors.black }) => color};
  margin: ${({ margin = "0px 0px 0px 0px" }) => margin};
  text-align: ${({ textAlign = "left" }) => textAlign};
`
export const OptionContent = styled.div`
  width: ${({ width = "250px" }) => width};
  height: ${({ height = "300px" }) => height};
  margin: 10px 15px 0px 0px;
  border: ${({ border = "0px solid #999999" }) => border};
  cursor: pointer;
  opacity: ${({ opacity = 1 }) => opacity};
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const OptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 20vw;
`
export const PromotionalProduct = styled.span`
  font-size: 1.1rem;
  text-decoration: line-through;
  color: #a19f9f;
  margin: 0;
`
export const CreditPayment = styled.h4`
  font-size: ${fontSizes.base}px;
  color: #a19f9f;
`
export const QuantityContainer = styled.div`
  display: flex;

  input {
    background-color: ${colors.white};
  }
`
