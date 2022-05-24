import styled from "styled-components";

export const SideMenuStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 50px 30px;
  background-color: #1a1919;
  z-index: 20;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  width: 200px;
  margin-bottom: 30px;
`;