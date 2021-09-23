import styled from "styled-components";
import {colors} from "../../pages/styles/theme";
export const IconDiv = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 768px) {
        flex-flow: column nowrap;
        justify-content: space-between;
        flex: 1;
    }
`;
export const CloseMenu = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: flex-start;
    padding-right: 16px;

    @media (min-width: 767px) {
        display: none;
    }
`;
export const CategoryContainer = styled.nav`
    display: flex;
    height: 100%;
    flex-direction: row;
    width: 100%;
    max-width: 800px;
    .hamburger {
        display: none;
    }

    .closeMenu {
        background-color: transparent;
        border: 0;
        color: #f4f4f4;
        cursor: pointer;
        font-size: 20px;
        transition: 0.2s;

        &:hover {
            color: #fff;
        }
    }

    ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding: 16px 0 16px 0;
        li {
            font-size: 1rem;
            padding: 0 1rem;
            cursor: pointer;
            transition: all ease-in-out 0.5s;
            list-style: none;
            position: relative;
            display: inline-block;
            div {
                display: flex;
                position: absolute;
                color: transparent;
                opacity: 0;
            }
            a {
                list-style: none;
                color: #c4c4c4;
            }
            &:hover {
                a {
                    color: #f4f4f4;
                }
                div {
                    opacity: 1;
                    display: flex;
                    flex-direction: column;
                    background-color: rgba(0, 0, 0, 1);
                    transition: all 0.8s;
                    padding-top: 5px;
                    border-radius: 5px;
                    a {
                        color: #f4f4f4;
                        padding: 20px 25px 20px 10px;
                        border-radius: 5px;
                        &:hover {
                            background-color: ${colors.darkGrey};
                        }
                    }
                }
            }
        }
    }
    @media (max-width: 767px) {
        justify-content: flex-end;
        padding-right: 16px;
        .hamburger {
            border: 0;
            cursor: pointer;
            align-items: center;
            font-size: 20px;
            display: flex;
            background-color: transparent;
            color: #f4f4f4;
        }
        ul {
            transition: 0.5s;
            transform: ${({isOpen}) =>
                isOpen ? "translate(0px, 0px)" : "translate(0px, -50vh)"};
            flex-flow: column-reverse nowrap;
            z-index: 900;
            height: 50vh;
            align-items: flex-start;
            max-width: 250px;
            justify-content: space-around;
            position: fixed;
            background-color: black;
            top: 0;
            right: 0;

            img {
                align-self: flex-start;
            }
        }
    }
`;

export const Container = styled.div`
    width: 100vw;
    height: 50px;
    z-index: 9999;
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 1920px;
    justify-content: center;
    background-color: rgba(0, 0, 0, 1);
    position: fixed;
    top: 0;
    right: 0;
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;
export const SearchContainer = styled.div`
    display: flex;
    max-width: 800px;
    justify-content: space-between;
    width: 100%;
`;
export const SearchImage = styled.img`
    width: 60px;
    height: 60px;
    cursor: pointer;
    align-self: center;
    display: flex;
`;
export const Icon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f5f5f5;
    font-size: 1.3rem;
    cursor: pointer;
    margin-right: 20px;
`;
export const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    transition: transform 0.25s cubic-bezier(0.71, 0.21, 0.72, 0.7);
    opacity: ${({isOpenSearchBar}) => (isOpenSearchBar ? 0 : 1)};
`;
