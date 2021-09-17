import styled from "styled-components";

export const Page = styled.div`
    padding: 16px;
    border: 1px solid #ff2a6d;
    color: ${({active}) => (active ? "#FFF" : "#ff2a6d")};
    border-radius: 8px;
    cursor: pointer;
    margin: 0 2px;
    transition: 0.2s;
    background: ${({active}) => (active ? "#ff2a6d" : "#FFF")};

    &:hover {
        background: #ff2a6d;
        color: #fff;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin: 24px 0;
`;
