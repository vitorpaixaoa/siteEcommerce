import styled from "styled-components"

export const SearchImage = styled.img`
  width: 60px;
  height: 60px;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`
export const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ isOpenSearchBar }) => (isOpenSearchBar ? "50vw" : "100%")};
  input {
    background-color: transparent;
    width: 100%;
    padding: 10px;
    color: #c4c4c4;
    border: transparent;
  }
`
