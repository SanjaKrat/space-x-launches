import React from 'react';
import styled from 'styled-components';

const ContainerStyled = styled.div`
  position: relative;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 769px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1025px) and (max-width: 1200px) {
    width: 1024px;
    margin: 0 auto;
  }
  @media screen and (min-width: 1201px) {
    width: 1200px;
    margin: 0 auto;
  }
`;
type ContainerProps = {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (<ContainerStyled>{children}</ContainerStyled>);
};

export default Container;
