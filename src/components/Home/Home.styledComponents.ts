import { Link } from "react-router-dom";
import styled from "styled-components";
import BackgroundImg from './f9_feature.webp'

export const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${BackgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const TitleLink = styled(Link)`
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
  @media screen and (max-width: 480px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    font-size: 3rem;
  }
`