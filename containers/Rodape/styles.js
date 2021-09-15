import styled from "styled-components"
import { colors } from "../../pages/styles/theme"

export const Container = styled.footer`
  display: flex;
  width: 100%;
  background-color: #f5f5f7;
  color: ${colors.darkGrey};
  font-size: 12px;
  display: flex;
  padding: 10px 0px;
  align-items: center;
  flex-direction: column;
  a {
    text-decoration: none;
    color: ${colors.darkGrey};
  }
  span {
    cursor: pointer;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-around;
  color: ${colors.darkGrey};
  font-size: 12px;
  img {
    max-width: 200px;
    max-height: 200px;
    cursor: pointer;
  }
`
