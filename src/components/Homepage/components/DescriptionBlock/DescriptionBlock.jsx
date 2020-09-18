import React from 'react';

import {NavLink} from '../../../Header/components/Menu/MenuElements';
import {IconBlock1, IconBlock2, IconBlock3} from '../IconBlock';

import {
  DescriptionWrapper,
  DescriptionLeft,
  DescriptionRight,
  ParagraphLeft,
  ParagraphRight,
} from './DescriptionBlockElements';

export const DescriptionBlock = ({contentForDescriptionBlock}) => (
  <DescriptionWrapper>
    <DescriptionLeft>
      <ParagraphLeft
        dangerouslySetInnerHTML={{
          __html: contentForDescriptionBlock.descriptionLeft.paragraph1,
        }}
      />
      <ParagraphLeft
        dangerouslySetInnerHTML={{
          __html: contentForDescriptionBlock.descriptionLeft.paragraph2,
        }}
      />
      <NavLink to={contentForDescriptionBlock.descriptionLeft.paragraph3.url}>
        <ParagraphLeft>
          {contentForDescriptionBlock.descriptionLeft.paragraph3.text}
        </ParagraphLeft>
      </NavLink>
    </DescriptionLeft>

    <DescriptionRight>
      <ParagraphRight>
        {contentForDescriptionBlock.descriptionRight.paragraph1}
      </ParagraphRight>
      <IconBlock1
        contentForIconBlock={contentForDescriptionBlock.iconBlock1}
        text={contentForDescriptionBlock.textForIconBlock1}
      />
      <ParagraphRight>
        {contentForDescriptionBlock.descriptionRight.paragraph2}
      </ParagraphRight>
      <IconBlock2 contentForIconBlock={contentForDescriptionBlock.iconBlock2} />
      <IconBlock3
        desktopContent={contentForDescriptionBlock.desktopTextForIconBlock3}
        mobileContent={contentForDescriptionBlock.mobileTextForIconBlock3}
      />
    </DescriptionRight>
  </DescriptionWrapper>
);
