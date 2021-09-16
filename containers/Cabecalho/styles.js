import styled from "styled-components"
import { colors } from "../../pages/styles/theme"

export const CategoryContainer = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: row;
  width: 40%;
  justify-content: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    li {
      font-size: 1rem;
      color: #c4c4c4;
      padding: 0 1rem;
      cursor: pointer;
      transition: all ease-in-out 0.5s;
      list-style: none;
      position: relative;
      display: inline-block;
      div {
        display: flex;
        position: absolute;
        color: transparent;
        opacity: 0;
      }
      a {
        list-style: none;
        color: #f4f4f4;
      }
      &:hover {
        color: #f4f4f4;
        div {
          opacity: 1;
          display: flex;
          flex-direction: column;
          background-color: rgba(0, 0, 0, 1);
          transition: all 0.8s;
          padding-top: 5px;
          border-radius: 5px;
          a {
            color: #f4f4f4;
            padding: 20px 25px 20px 10px;
            border-radius: 5px;
            &:hover {
              background-color: ${colors.darkGrey};
            }
          }
        }
      }
    }
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
`

export const SearchImage = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
`
export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f5f5;
  font-size: 1.3rem;
  cursor: pointer;
  margin-right: 20px;
`
export const Options = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all ease-in 5s;
  opacity: ${({ isOpenSearchBar }) => (isOpenSearchBar ? 0 : 1)};
`
