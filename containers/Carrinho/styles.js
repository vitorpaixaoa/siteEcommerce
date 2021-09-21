import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 64vw;
    padding: 0 16px;
    max-width: 1200px;
    margin: 0 auto;
    transition: 0.2s;
`;

export const ProductBox = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 32px;
`;

export const ImageBox = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ItemDetails = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`;

export const TitleBox = styled.div`
    width: 50%;
`;

export const QuantityBox = styled.div`
    width: 20%;
    input[type="number"] {
        width: 100%;
        outline: none;
        border: 1px solid #d2d2d7;
        border-radius: 8px;
        padding: 8px 16px;
        transition: 0.2s;

        &:focus {
            border: 1px solid #0070c9;
        }
    }
`;

export const PriceBox = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`;

export const DadosDoCarrinhoContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

export const DadosDoCarrinhoBox = styled.div`
    width: 100%;
    display: flex;
    padding: 0 0 64px;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
`;

export const Title = styled.h1`
    margin: 24px 0;
    text-align: center;
    font-size: 32px;
    line-height: 1.16667;
    font-weight: 600;
    letter-spacing: 0.009em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
        sans-serif;
    color: #494949;
`;
