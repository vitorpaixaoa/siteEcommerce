import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Input = styled.input`
    width: 100%;
    max-width: 400px;
    font-size: 1rem;
    margin: 0px 5px 0 0;
    padding: 12px 8px;
    border: 1px solid #d6d6d6;
    border-radius: ${props => props.borderRadius ? props.borderRadius : '8px'};
    transition: .2s;

    &:focus {
        outline: none;
        border: 1px solid #0070c9
    }
`