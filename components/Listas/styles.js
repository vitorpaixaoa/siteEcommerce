import styled from "styled-components";

export const CategoryItem = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
span {
    font-size: 1rem;
    color: #c4c4c4;
    padding: 0 1rem;
    cursor: pointer;
    transition: all ease-in-out .5s;

    &:hover{
        color: #f4f4f4;
    }
}
` 

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
`