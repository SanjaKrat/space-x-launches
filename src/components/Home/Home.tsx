import React from 'react';
import { HomeStyled, TitleLink } from './Home.styledComponents';

const Home = () => (
  <HomeStyled>
    <TitleLink to={'/launches'}>
      SEE LAUNCHES
    </TitleLink>
  </HomeStyled>
);

export default Home;
