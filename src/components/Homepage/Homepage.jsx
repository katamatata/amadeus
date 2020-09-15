import React from 'react';

import {NavLink} from '../Header/components/Menu/MenuElements';

import {ContentWrapper, TopImage} from '../../common';
import {Title} from '../../common/Title';
import {Subtitle} from '../../common/Subtitle';
import {IconBlock1, IconBlock2, IconBlock3} from './components/IconBlock';
import ButtonBlock from './components/ButtonBlock';

import {
  TitlesWrapper,
  DescriptionWrapper,
  DescriptionLeft,
  DescriptionRight,
  ParagraphLeft,
  ParagraphRight,
} from './HomepageElements';

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
    <DescriptionWrapper>
      <DescriptionLeft>
        <ParagraphLeft
          dangerouslySetInnerHTML={{
            __html: contentForHomepage.descriptionLeft.paragraph1,
          }}
        />
        <ParagraphLeft
          dangerouslySetInnerHTML={{
            __html: contentForHomepage.descriptionLeft.paragraph2,
          }}
        />
        <NavLink to={contentForHomepage.descriptionLeft.paragraph3.url}>
          <ParagraphLeft>
            {contentForHomepage.descriptionLeft.paragraph3.text}
          </ParagraphLeft>
        </NavLink>
      </DescriptionLeft>
      <DescriptionRight>
        <ParagraphRight>
          {contentForHomepage.descriptionRight.paragraph1}
        </ParagraphRight>
        <IconBlock1
          contentForIconBlock={contentForHomepage.iconBlock1}
          text={contentForHomepage.textForIconBlock1}
        />
        <ParagraphRight>
          {contentForHomepage.descriptionRight.paragraph2}
        </ParagraphRight>
        <IconBlock2 contentForIconBlock={contentForHomepage.iconBlock2} />
        <IconBlock3
          desktopContent={contentForHomepage.desktopTextForIconBlock3}
          mobileContent={contentForHomepage.mobileTextForIconBlock3}
        />
      </DescriptionRight>
    </DescriptionWrapper>
    <ButtonBlock contentForButtonBlock={contentForHomepage.buttons} />
  </ContentWrapper>
);
