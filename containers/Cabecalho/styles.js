import styled from "styled-components"

export const CategoryContainer = styled.nav`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 50%;
`
export const Container = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
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
