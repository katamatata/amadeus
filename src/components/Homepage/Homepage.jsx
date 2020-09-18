import React from 'react';

import {ContentWrapper, TopImage} from '../../common';
import {Title} from '../../common/Title';
import {Subtitle} from '../../common/Subtitle';
import DescriptionBlock from './components/DescriptionBlock';
import ButtonBlock from './components/ButtonBlock';

import {TitlesWrapper} from './HomepageElements';

export const Homepage = ({contentForHomepage}) => (
  <ContentWrapper>
    <TopImage
      image={contentForHomepage.topImage.imageSrc}
      mobileImage={contentForHomepage.topImage.mobileImageSrc}
    />
    <TitlesWrapper>
      <Title
        dangerouslySetInnerHTML={{
          __html: contentForHomepage.title,
        }}
      />
      <Subtitle
        desktopSubtitle={contentForHomepage.subtitle}
        mobileSubtitle={contentForHomepage.mobileSubtile}
      />
    </TitlesWrapper>
    <DescriptionBlock
      contentForDescriptionBlock={contentForHomepage.description}
    />
    <ButtonBlock contentForButtonBlock={contentForHomepage.buttons} />
  </ContentWrapper>
);
