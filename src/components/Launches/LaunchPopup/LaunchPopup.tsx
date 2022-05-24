import React from 'react';
import {
  CloseBtn,
  ColumnWrapper,
  Opacity,
  PopupOuter,
  PopupStyled,
  Title,
  WikiLink,
  Image
} from './LaunchPopup.styledComponents';
import { dateGenerator } from '../../../helpers';
import { Launch } from '../../../types';

type LaunchProps = Launch & { closePopup: () => void, rocketName: string | undefined };

const LaunchPopup = ({
  details,
  wikipedia,
  launchDate,
  patchImg,
  name,
  image,
  rocketName,
  closePopup
}: LaunchProps) => {
  return (
    <PopupOuter>
      <PopupStyled bg={image}>
        <Opacity>
          <ColumnWrapper>
            <Image src={patchImg} />
            <p>Launch date: {dateGenerator(new Date(launchDate))}</p>
            {rocketName ? <p>Rocket: {rocketName}</p> : null}
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
