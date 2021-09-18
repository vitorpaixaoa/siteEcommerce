import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-self: flex-start;
  }
`
export const Image = styled.img`
  width: 60px;
  height: 60px;
  display: flex;
  align-self: center;
  cursor: pointer;
`

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: #f5f5f5;
  font-size: 1.3rem;
  cursor: pointer;
`
