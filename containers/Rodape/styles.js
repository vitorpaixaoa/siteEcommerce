import styled from "styled-components"
import { colors } from "../../pages/styles/theme"

export const Container = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${colors.lightGrey};
  color: ${colors.darkGrey};
  font-size: 12px;
  padding: 10px 0px;
  bottom: 0;
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
  background-color: transparent;
  justify-content: space-around;
  color: ${colors.darkGrey};
  font-size: 12px;
  img {
    max-width: 200px;
    max-height: 200px;
    cursor: pointer;
  }
`
