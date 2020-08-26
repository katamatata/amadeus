import React from 'react';

import {H2} from '../../../../common';

import {List, Text, ListWithArrows} from './IconBlockElements';

export const IconBlock1 = ({contentForIconBlock}) => (
  <List>
    {contentForIconBlock.map((item, index) => (
      <li key={index}>
        <img src={item.imageSrc} alt="" />
      </li>
    ))}
    <H2>= Points</H2>
  </List>
);

export const IconBlock2 = ({contentForIconBlock}) => (
  <List>
    {contentForIconBlock.map((item, index) => (
      <li key={index}>
        <img src={item.imageSrc} alt="" />
      </li>
    ))}
  </List>
);

export const TextIconBlock = ({contentForTextIconBlock}) => (
  <ListWithArrows>
    {contentForTextIconBlock.map((item, index) => (
      <li key={index}>
        <Text>{item}</Text>
      </li>
    ))}
  </ListWithArrows>
);
