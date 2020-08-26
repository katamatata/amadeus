import React from 'react';

import {NavLink} from '../Header/components/Menu/MenuElements';

import {ContentWrapper, TopImage, H1, H2} from '../../common';

import {
  TitlesWrapper,
  DescriptionWrapper,
  DescriptionLeft,
  DescriptionRight,
  ParagraphLeft,
  ParagraphRight,
} from './HomepageElements';

import {IconBlock1, IconBlock2, TextIconBlock} from './components/IconBlock';
import ButtonBlock from './components/ButtonBlock';

export const Homepage = ({contentForHomepage}) => (
  <ContentWrapper>
    <TopImage src={contentForHomepage.topImage.imageSrc} />
    <TitlesWrapper>
      <H1>{contentForHomepage.title}</H1>
      <H2>{contentForHomepage.subtitle}</H2>
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
        <IconBlock1 contentForIconBlock={contentForHomepage.iconBlock1} />
        <ParagraphRight>
          {contentForHomepage.descriptionRight.paragraph2}
        </ParagraphRight>
        <IconBlock2 contentForIconBlock={contentForHomepage.iconBlock2} />
        <TextIconBlock
          contentForTextIconBlock={
            contentForHomepage.descriptionRight.paragraph3
          }
        />
      </DescriptionRight>
    </DescriptionWrapper>
    <ButtonBlock contentForButtonBlock={contentForHomepage.buttons} />
  </ContentWrapper>
);
