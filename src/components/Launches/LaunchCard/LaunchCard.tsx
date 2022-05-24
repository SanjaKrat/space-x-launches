import React from 'react';
import { CardImage, CardStyled } from './LaunchCard.styledComponents';
import { getYoutubePreview } from '../../../helpers';

type LaunchCardProps = {
  name: string,
  image: string,
  youtubeId: string,
  onClick: () => void
}

const LaunchCard = ({ name, image = '', youtubeId, onClick }: LaunchCardProps) => {
  return (
    <CardStyled onClick={onClick}>
      <CardImage src={image ? image : getYoutubePreview(youtubeId)} alt={name} />
    </CardStyled>
  )
}

export default LaunchCard;
