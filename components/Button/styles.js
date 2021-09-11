import styled from "styled-components"
import { colors } from "../../pages/styles/theme"

export const Container = styled.button`
  width: 100%;
  padding: 0.5rem 1rem;
  align-self: center;
  background-color: ${({ loading, background }) =>
    loading ? colors.lightGrey : background};
  color: ${({ ButtonLabelColor, loading }) =>
    loading ? colors.black : ButtonLabelColor};
  border-radius: 8px;
  font-weight: 700;
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
