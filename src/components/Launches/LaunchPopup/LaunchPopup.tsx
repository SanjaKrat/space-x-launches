import React from 'react';
import styled from 'styled-components';
import { dateGenerator } from '../../../helpers';
import { Launch } from '../../../types';

// type LaunchPopuopProps = {
//   details: string,
//   wikipedia: string,
//   launchDate: string,
//   patchImg: string,
//   name: string,
//   rocket: string,
//   image: string,
//   youtubeId: string,
// }

const PopupOuter = styled.div`
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

const PopupStyled = styled.div<PopupStyleProps>`
  position: fixed;
  width: 500px;
  height: fit-content;
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
  overflow: hidden;
  z-index: 20;
`;
const Opacity = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  padding: 15px;
  display: flex;
  flex-direction: row;
  gap: 30px;
`
const Image = styled.img`
  width: 150px;
  height: auto;
`;
const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
`;
const WikiLink = styled.a`
  color: inherit;
  &:hover {
    color: hotpink;
  }
`
const CloseBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  color: white;
  align-self: flex-end;
  cursor: pointer;
  font-size: 1.5rem;
`

type LaunchProps = Launch & { closePopup: () => void };

const LaunchPopup = ({
  details,
  wikipedia,
  launchDate,
  patchImg,
  name,
  rocket,
  image,
  youtubeId,
  closePopup
}: LaunchProps) => {
  return (
    <PopupOuter>
      <PopupStyled bg={image}>
        <Opacity>
          <ColumnWrapper>
            <Image src={patchImg} />
            <p>Launch date: {dateGenerator(new Date(launchDate))}</p>
          </ColumnWrapper>
          <ColumnWrapper>
            <CloseBtn onClick={closePopup}>&#10006;</CloseBtn>
            <Title>
              {name}
            </Title>
            <p>{details}</p>
            <WikiLink target='_blank' href={wikipedia} rel="noreferrer noopener">More on Wikipedia</WikiLink>
          </ColumnWrapper>
        </Opacity>
      </PopupStyled>
    </PopupOuter>
  )
}

export default LaunchPopup;
