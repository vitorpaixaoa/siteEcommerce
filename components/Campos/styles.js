import styled from "styled-components";

export const SearchImage = styled.img `
width: 60px;
height: 60px;
`

export const Container = styled.div`
display: flex;
justify-content: center;
cursor: pointer;
`
export const InputDiv = styled.div `
display: flex;
justify-content: center;
width: ${({isOpenSearchBar}) =>  isOpenSearchBar ? '50vw' : '100%'};

input{
    background-color:transparent;
    width: 100%;
    padding: 10px;
    color: #c4c4c4;
    border: transparent;
}
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