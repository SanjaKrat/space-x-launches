import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImg from './f9_feature.webp'

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TitleLink = styled(Link)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: inherit;
  text-decoration: none;
  font-size: 4rem;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
    color: hotpink;
  }
`

const Home = () => (
  <HomeStyled>
    <TitleLink to={'/launches'}>
      SEE LAUNCHES
    </TitleLink>
  </HomeStyled>
);

export default Home;
