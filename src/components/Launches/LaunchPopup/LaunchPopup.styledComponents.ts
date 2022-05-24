import styled from "styled-components";

export const PopupOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.2);
  z-index: 20;
`;

type PopupStyleProps = {
  bg: string
};

export const PopupStyled = styled.div<PopupStyleProps>`
  position: fixed;
  width: 500px;
  box-sizing: border-box;
  background-color: #1a1919;
  border-radius: 15px;
  border: 2px solid white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-image: url(${props => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  backdrop-filter: blur(10px);
  overflow: hidden;
  z-index: 20;

  @media screen and (min-width: 1025px) {
    min-height: 400px;
    height: fit-content;
  }
  @media screen and (max-width: 501px) {
    min-height: 100%;
    width: 100%;
    height: fit-content;
  }
`;

export const Opacity = styled.div`
  box-sizing: border-box;
  width: 100%; 
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  justify-content: space-between;
  @media screen and (min-width: 1025px) {
    min-height: 400px;
    height: 100%;
  }
  @media screen and (max-width: 501px) {
    min-height: 100%;
    width: 100%;
    padding: 50px 20px
    /* height: fit-content; */
  }
`;

export const Image = styled.img`
  width: 150px;
  height: auto;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;

export const WikiLink = styled.a`
  color: inherit;
  &:hover {
    color: hotpink;
  }
`;

export const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  color: white;
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.5rem;
`;