import styled from "styled-components"
import { colors } from "../../pages/styles/theme"
export const IconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    justify-content: space-between;
    flex: 1;
  }
`
export const CategoryContainer = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: row;
  width: 100%;
  max-width: 800px;
  .hamburger {
    background-color: red;
    border: 0;
    border: 1px solid red;
    cursor: pointer;
    align-items: center;
    font-size: 20px;
    display: flex;
  }

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 24px 0 36px 0;
    li {
      font-size: 1rem;
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
        color: #c4c4c4;
      }
      &:hover {
        a {
          color: #f4f4f4;
        }
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
    @media (max-width: 767px) {
      display: none;
      flex-flow: column-reverse nowrap;
      z-index: 900;
      height: 50vh;
      align-items: flex-start;
      max-width: 250px;
      justify-content: space-around;
      position: fixed;
      background-color: black;
      top: 0;
      right: 0;

      img {
        align-self: flex-start;
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
  max-height: 1920px;
  justify-content: center;
  background-color: rgba(0, 0, 0, 1);
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`
export const SearchContainer = styled.div`
  display: flex;
  max-width: 800px;
  justify-content: space-between;
  width: 100%;
`
export const SearchImage = styled.img`
  width: 60px;
  height: 60px;
  cursor: pointer;
  align-self: center;
  display: flex;
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
  width: 100vw;
  transition: transform 0.25s cubic-bezier(0.71, 0.21, 0.72, 0.7);
  opacity: ${({ isOpenSearchBar }) => (isOpenSearchBar ? 0 : 1)};
`
