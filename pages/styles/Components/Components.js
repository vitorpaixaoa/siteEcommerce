import {colors, fontSizes, Weight} from "../theme";
import styled from "styled-components";

export const CenterBox = styled.div`
    display: flex;
    justify-content: center;
`;

export const HorizontalBox = styled.div`
    display: flex;
    flex-direction: row;
    width: ${(props) => props.width};
    max-width: ${(props) => props.maxWidth};
    justify-content: ${(props) => props.justifyContent};
    margin: ${({margin = "0 auto"}) => margin};
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
        border: 1px solid #ff2a6d;
    }
`;

export const Button = styled.button`
    width: ${({width = "100%"}) => width};
    min-width: ${({minWidth = "196px"}) => minWidth};
    font-size: ${({fontSize = "1rem"}) => fontSize};
    padding: ${({padding = "12px 32px"}) => padding};
    margin: ${({margin = "10px 0"}) => margin};
    background: ${({background = "#000"}) => background};
    color: ${({color = "#fff"}) => color};
    cursor: pointer;
    border-radius: ${({borderRadius = "8px"}) => borderRadius};
    transition: 0.2s;
    outline: none;
    border: none;

    &:hover {
        opacity: 0.8;
    }
`;

export const TextComponent = styled.span`
    font-size: ${({fontSize = fontSizes.base}) => fontSize + "px"};
    font-weight: ${({fontWeight = Weight.ligth}) => fontWeight};
    color: ${({color = colors.black}) => color};
    margin: ${({margin = "0px 0px 0px 0px"}) => margin};
    text-align: ${({textAlign = "left"}) => textAlign};
    cursor: ${({cursor = "default"}) => cursor};
    width: ${({width = "100%"}) => {
        if (typeof width === "string") {
            return width;
        } else {
            return width + "px";
        }
    }};
    font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
        sans-serif;
`;

export const GroupComponent = styled.div`
    flex-direction: ${({flexDirection = "column"}) => flexDirection};
    align-items: ${({alignItems = "flex-start"}) => alignItems};
    justify-content: ${({justifyContent = "flex-start"}) => justifyContent};
    margin-top: ${({marginTop = 0}) => marginTop + "px"};
    margin-left: ${({marginLeft = 0}) => marginLeft + "px"};
    border-bottom-width: ${({borderBottomWidth = 0}) =>
        borderBottomWidth + "px"};
    border-bottom-color: ${({borderColor = "white"}) => borderColor};
    padding: ${({padding = 0}) => padding};
    opacity: ${({opacity = 1}) => opacity};
    flex-wrap: ${({flexWrap = "nowrap"}) => flexWrap};
    display: flex;
    background-color: ${({backgroundColor = "transparent"}) => backgroundColor};
    width: ${({width = "100%"}) => width};
    height: ${({height = "100%"}) => {
        if (typeof height === "string") {
            return height;
        }
        return height + "px";
    }};
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;
const isScrollDiv = (props) => {
    const isScrollDiv = "overflow:auto;background:#fff";
    return props.isScrollDiv ? isScrollDiv : null;
};
export const Container = styled.div`
    ${isScrollDiv};
    height: ${({height = "100%"}) => {
        if (typeof height === "string") {
            return height;
        }
        return height + "px";
    }};
    width: ${({width = "100%"}) => {
        return width;
    }};
    max-width: ${({maxWidth = "100%"}) => {
        return maxWidth;
    }};
    margin: ${({margin = "0px 0px 0px 0px"}) => margin};
    padding: ${({padding = "0px 0px 0px 0px"}) => padding};
    background-color: ${({background = colors.white}) => background};
    opacity: ${({opacity = 1}) => opacity};
    display: flex;
    flex-direction: ${({flexDirection = "row"}) => flexDirection};
    align-items: ${({alignItems = "flex-start"}) => alignItems};
    justify-content: ${({justifyContent = "flex-start"}) => justifyContent};
    flex-wrap: ${({wrap = "nowrap"}) => wrap};
    max-width: 1920px;
    min-width: 300px;
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
    }
    .closeMenu {
        background-color: transparent;
        border: 0;
        color: #f4f4f4;
        cursor: pointer;
        font-size: 20px;
    }
    .hamburger {
        background-color: transparent;
        border: 0;
        color: #f4f4f4;
        cursor: pointer;
        font-size: 20px;
    }
`;

export const Divisor = styled.div`
    height: ${({height = "100%"}) => {
        if (typeof height === "string") {
            return height;
        }
        return height + "px";
    }};
    width: 100%;
    margin: ${({margin = "0px 0px 0px 0px"}) => margin};
    padding: ${({padding = "0px 0px 0px 0px"}) => padding};
    background-color: ${({background = colors.white}) => background};
`;
