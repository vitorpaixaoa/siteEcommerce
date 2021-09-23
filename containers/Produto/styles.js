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
  font-weight: 500;
`
export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: ${colors.white};
    margin: 0px 0px 0px 20px;
    max-width: 100px;
    padding: 5px;
    border-radius: 5px;
    border: 0.5px solid ${colors.secondaryBlue};
  }
  label {
    font-weight: 500;
    font-size: ${fontSizes.base}px;
  }
`
export const LinkDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ul {
    padding-top: 10px;
    display: flex;
    align-items: center;
    color: #FF2A6D;
    text-decoration: none;
    font-size: 0.8rem;
    li a {
      padding-top: 40px;
      color: #FF2A6D;
      text-decoration: none;
    }
    i {
      margin-left: 5px;
    }
  }
`

export const Dropdown = styled.select`
  padding: 0rem 3rem 0.5rem 0rem;
  background-color: ${colors.white};
  width: 100%;
  border: 0px solid ${colors.darkGrey};
  border-bottom: 2px solid ${colors.darkGrey};
  color: ${colors.darkGrey};
`
export const TextArea = styled.textarea`
  background-color: ${colors.white};
  width: 100%;
  border: 0px solid ${colors.darkGrey};
  border-bottom: 2px solid ${colors.darkGrey};
  color: ${colors.darkGrey};
`

export const Label = styled.label`
  font-size: ${fontSizes.base}px;
  font-weight: 700;
  color: ${colors.darkGrey};
  margin: 0px 0px 16px 0px;
`

export const TitleSubmitFeedback = styled.h4`
  font-size: ${fontSizes.large}px;
  font-weight: 700;
  color: ${colors.darkGrey};
  margin: 0px 0px 24px 0px;
`

export const NoAuthorizedUser = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  align-self: center;
  background-color: ${({ loading, background }) =>
    loading ? colors.lightGrey : background};
  color: ${({ ButtonLabelColor, loading }) =>
    loading ? colors.black : ButtonLabelColor};
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 2px;
  margin-top: 1.5rem;
  font-size: 14px;
  border: 1px solid
    ${({ ColorButton, loading }) => (loading ? colors.lightGrey : ColorButton)};
  transition: all 0.25s ease-in;
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: ${({ loading }) =>
      loading ? colors.lightGrey : colors.red};
    border: ${({ loading }) =>
      loading ? `1px solid ${colors.lightGrey}` : `1px solid ${colors.red}`};
    transform: ${({ loading }) =>
      loading ? "translate(0px, 0px)" : "translate(0px, -3px)"};
  }
`
