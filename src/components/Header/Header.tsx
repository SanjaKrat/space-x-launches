import React from 'react';
import Container from '../../common/Container';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import logo from './logo.png';

const HeaderStyled = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
`;

const NavItem = styled(NavLink)`
  margin-left: 35px;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.img`
  height: 75px;
`;

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
