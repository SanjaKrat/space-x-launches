import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-bottom: 4px solid #a8a6a6;
  border-left: 4px solid #a8a6a6;
  border-top: 4px solid #a8a6a6;
  border-right: 4px solid white;
  border-radius: 50%;
  animation: ${rotate} 1.3s linear infinite;
`;

const Spinner = () => <SpinnerStyled />;

export default Spinner;
