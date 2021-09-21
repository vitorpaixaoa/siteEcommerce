import styled from "styled-components"
import { colors } from "../../pages/styles/theme"

export const Form = styled.form`
  position: relative;
  label {
    letter-spacing: 0.1rem;
    color: ${colors.darkGrey};
  }
`

export const ErrorMessage = styled.small`
  position: absolute;
  top: 4px;
  right: 8px;
  color: red;
`

export const Input = styled.input`
  width: 100%;
  font-size: 1rem;
  margin: 0px 5px 0 0;
  padding: 12px 8px;
  border: 1px solid #d6d6d6;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "8px"};
  transition: 0.2s;
  outline: none;

  &:focus {
    border: 1px solid #0070c9;
  }
`
