import React from 'react';

import {
  List,
  TextForIconBlock1,
  DesktopOnlyBlock,
  MobileOnlyBlock,
  ListWithArrows,
} from './IconBlockElements';

export const IconBlock1 = ({contentForIconBlock, text}) => (
  <List>
    {contentForIconBlock.map((item, index) => (
      <li key={index}>
        <img src={item.imageSrc} alt={item.altText} />
      </li>
    ))}
    <TextForIconBlock1>{text}</TextForIconBlock1>
  </List>
);

export const IconBlock2 = ({contentForIconBlock}) => (
  <List>
    {contentForIconBlock.map((item, index) => (
      <li key={index}>
        <img src={item.imageSrc} alt={item.altText} />
      </li>
    ))}
  </List>
);

export const IconBlock3 = ({desktopContent, mobileContent}) => (
  <>
    <DesktopOnlyBlock>
      <ListWithArrows>
        {desktopContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListWithArrows>
    </DesktopOnlyBlock>
    <MobileOnlyBlock>
      <ListWithArrows>
        {mobileContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ListWithArrows>
    </MobileOnlyBlock>
  </>
);
