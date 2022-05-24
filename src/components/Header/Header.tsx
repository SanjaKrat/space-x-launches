import React from 'react';
import Container from '../../common/Container';
import { HeaderStyled, Logo, NavItem } from './Header.styledComponents';
import logo from './logo.png';

const Header = () => {
  return (
    <Container>
      <HeaderStyled>
        <div>
          <Logo src={logo} alt="logo" />
        </div>
        <NavItem to={'/'} >Home</NavItem>
        <NavItem to={'/launches'}>Launches</NavItem>
      </HeaderStyled>
    </Container>
  )
}

export default Header;
