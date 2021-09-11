import styled from "styled-components"

export const Img = styled.img`
  width: ${({ width = "250px" }) => width};
  height: ${({ height = "300px" }) => height};
  margin: 10px 15px;
  border: ${({ border = "0px solid #999999" }) => border};
  cursor: pointer;
  opacity: ${({ opacity = 1 }) => opacity};
  border-radius: 10px;
  padding: 10px;
`
export const MiniImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`
