import styled from "styled-components";

export const LoginBox = styled.div``;

export const FormBox = styled.div``;

export const HorizontalBox = styled.div`
    display: flex;
    flex-direction: row;
    max-width: ${(props) => props.maxWidth};
    margin: 0 auto;
`;

export const Select = styled.select`
    background-color: transparent;
    width: 100%;
    font-family: inherit;
    cursor: inherit;
    line-height: inherit;
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
`;

export const Title = styled.h2`
    margin: 24px 0;
    text-align: center;
    font-size: 24px;
    line-height: 1.16667;
    font-weight: 600;
    letter-spacing: 0.009em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
        sans-serif;
    color: #494949;
`;

export const Subtitle = styled.h2`
    margin: 12px 0;
    font-size: 16px;
    line-height: 1.16667;
    font-weight: 600;
    letter-spacing: 0.009em;
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
        sans-serif;
    color: #494949;
`;

export const Button = styled.button`
    font-size: 1.1rem;
    padding: 12px 32px;
    margin: 10px 0;
    background: #000;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #999999;
    border-radius: 8px;
    transition: 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const Separator = styled.div`
    width: 100%;
    max-width: 328px;
    margin: 8px auto;
    height: 1px;
    background: #f0f0f0;
`;

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const ForgotPassword = styled.a`
    margin-top: 12px;
    font-size: 14px;
    text-decoration: none;
    color: #0070c9;

    &:hover {
        text-decoration: underline;
    }
`;

export const LinkAcesso = styled.div`
    margin-top: 12px;
    font-size: 14px;
    text-align: center;
    text-decoration: none;
    color: #494949;
    transition: 0.2s;
    cursor: default;

    .click-text {
        cursor: pointer;
        color: #0070c9;

        &:hover {
            text-decoration: underline;
        }
    }
`;

export const AcessoBox = styled.div`
    margin: 50px auto 10px;
    width: calc(100% - 20px);
    padding: 20px;
    max-width: 500px;
`;
