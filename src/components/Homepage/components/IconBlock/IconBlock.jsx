import React from 'react';

import {
  List,
  TextForIconBlock1,
  DesktopTextForIconBlock3,
  MobileTextForIconBlock3,
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

export const DesktopIconBlock3 = ({desktopContent}) => (
  <ListWithArrows>
    {desktopContent.map((item, index) => (
      <li key={index}>
        <DesktopTextForIconBlock3>{item}</DesktopTextForIconBlock3>
      </li>
    ))}
  </ListWithArrows>
);

export const MobileIconBlock3 = ({mobileContent}) => (
  <ListWithArrows>
    {mobileContent.map((item, index) => (
      <li key={index}>
        <MobileTextForIconBlock3>{item}</MobileTextForIconBlock3>
      </li>
    ))}
  </ListWithArrows>
);
