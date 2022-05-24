import styled from "styled-components";

export const CardStyled = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  height: 320px;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;

export const CardImage = styled.img`
  width: auto;
  height: 100%;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: auto;
  }
`;