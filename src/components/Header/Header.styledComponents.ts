import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.div`
  position: absolute;
  top: 0;
  z-index: 10;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 1.25rem;
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const NavItem = styled(NavLink)`
  margin-left: 35px;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 480px) {
    margin-left: 20px;
  }
`;

export const Logo = styled.img`
  height: 75px;
  @media screen and (max-width: 480px) {
    height: 50px;
  }
`;