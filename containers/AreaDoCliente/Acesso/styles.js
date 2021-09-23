import styled from "styled-components";

export const LoginBox = styled.div``;

export const FormBox = styled.div``;

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

export const Separator = styled.div`
    width: 100%;
    max-width: 328px;
    margin: 8px auto;
    height: 1px;
    background: #f0f0f0;
`;

export const ForgotPassword = styled.a`
    margin-top: 12px;
    font-size: 14px;
    text-decoration: none;
    color: #FF2A6D;

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
        color: #FF2A6D;

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
