import React from 'react';

import {ContentWrapper, TopImage} from '../../common';
import {Title} from '../../common/Title';
import {Subtitle} from '../../common/Subtitle';
import DescriptionBlock from './components/DescriptionBlock';
import ButtonBlock from './components/ButtonBlock';

import {TitlesWrapper} from './HomepageElements';

export const Homepage = ({content}) => {
  const {
    topImage,
    title,
    subtitle,
    mobileSubtile,
    description,
    buttons,
  } = content;

  return (
    <ContentWrapper>
      <TopImage
        image={topImage.imageSrc}
        mobileImage={topImage.mobileImageSrc}
      />
      <TitlesWrapper>
        <Title dangerouslySetInnerHTML={{__html: title}} />
        <Subtitle desktopSubtitle={subtitle} mobileSubtitle={mobileSubtile} />
      </TitlesWrapper>
      <DescriptionBlock content={description} />
      <ButtonBlock content={buttons} />
    </ContentWrapper>
  );
};
