import React from 'react';
import styled from 'styled-components';
import { getYoutubePreview } from '../../../helpers';

type LaunchCardProps = {
  details: string,
  wikipedia: string,
  launchDate: string,
  patchImg: string,
  name: string,
  rocket: string,
  image: string,
  youtubeId: string,
  onClick: () => void
}

const CardStyled = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 15px;
  height: 320px;
`;

const CardImage = styled.img`
  width: auto;
  height: 100%;
`;

const LaunchCard = ({ details, wikipedia, launchDate, patchImg, name, rocket, image = '', youtubeId, onClick }: LaunchCardProps) => {
  return (
    <CardStyled onClick={onClick}>
      <CardImage src={image ? image : getYoutubePreview(youtubeId)} alt={name} />
    </CardStyled>
  )
}

export default LaunchCard;
