import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 100vw;
margin: 40px 0px 40px 0px;
flex-direction: ${({flexDirection = 'row'}) => flexDirection };
`
export const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
li{
list-style: none;
}
`
export const ProductTitle = styled.h3`
font-weight: 600;
font-size: 24px;
`

export const PromotionalProduct = styled.span`
    font-size: 1.1rem;
    text-decoration: line-through;
    color: #a19f9f;
    margin: 0;
`

export const ImageContainer = styled.img`
width: 30vw;
height: 80vh;
`
export const LinkDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
ul{
    padding-top: 10px;
    display: flex;
    align-items: center;
    color: #06c;
    text-decoration: none;
    font-size: 0.8rem;
    li a{
    padding-top: 40px;
    color: #06c;
    text-decoration: none;
    }
    i{
        margin-left: 5px;
    }
}
`