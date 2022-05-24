import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 10px 15px;
  background-color: inherit;
  border: 2px solid white;
  border-radius: 5px;
  color: white;
  font-size: inherit;
  font-family: inherit;
  cursor: pointer;
  & :hover {
    background-color: white;
    color: black;
  }
`;

type ButtonProps = {
  innerText: string,
  onClick: () => void
}

const Button = ({ innerText, onClick }: ButtonProps) => <ButtonStyled onClick={onClick}>{innerText}</ButtonStyled>;

export default Button;
