import React from 'react';

import {NavLink} from '../../../Header/components/Menu/MenuElements';
import {IconBlockTop, IconBlockMiddle, IconBlockBottom} from '../IconBlock';

import {
  DescriptionWrapper,
  DescriptionLeft,
  DescriptionRight,
  ParagraphLeft,
  ParagraphRight,
} from './DescriptionBlockElements';

export const DescriptionBlock = ({content}) => {
  const {
    descriptionLeft,
    descriptionRight,
    iconBlockTop,
    iconBlockMiddle,
    iconBlockBottom,
  } = content;

  const {paragraph1, paragraph2, paragraph3} = descriptionLeft;

  const {paragraph1: par1, paragraph2: par2} = descriptionRight;

  const {desktopText, mobileText} = iconBlockBottom;

  return (
    <DescriptionWrapper>
      <DescriptionLeft>
        <ParagraphLeft dangerouslySetInnerHTML={{__html: `${paragraph1}`}} />
        <ParagraphLeft dangerouslySetInnerHTML={{__html: `${paragraph2}`}} />
        <NavLink to={paragraph3.url}>
          <ParagraphLeft>{`${paragraph3.text}`}</ParagraphLeft>
        </NavLink>
      </DescriptionLeft>

      <DescriptionRight>
        <ParagraphRight>{`${par1}`}</ParagraphRight>
        <IconBlockTop content={iconBlockTop} />
        <ParagraphRight>{`${par2}`}</ParagraphRight>
        <IconBlockMiddle content={iconBlockMiddle} />
        <IconBlockBottom
          desktopContent={desktopText}
          mobileContent={mobileText}
        />
      </DescriptionRight>
    </DescriptionWrapper>
  );
};
