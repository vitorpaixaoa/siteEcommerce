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
  justify-content: space-between;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  color: ${colors.darkGrey};
  font-size: 12px;
`
