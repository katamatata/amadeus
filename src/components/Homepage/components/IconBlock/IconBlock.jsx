import React from 'react';

import {
  List,
  CustomList,
  Text,
  DesktopOnlyBlock,
  MobileOnlyBlock,
  ListWithArrows,
} from './IconBlockElements';

export const IconBlockTop = ({content}) => (
  <CustomList>
    {content.map((item, index) => (
      <li key={index}>
        {item.imageSrc ? (
          <img src={item.imageSrc} alt={item.altText} />
        ) : (
          <Text>{`${item.text}`}</Text>
        )}
      </li>
    ))}
  </CustomList>
);

export const IconBlockMiddle = ({content = []}) =>
  content.length ? (
    <List>
      {content.map((item, index) => (
        <li key={index}>
          <img src={item.imageSrc} alt={item.altText} />
        </li>
      ))}
    </List>
  ) : null;

export const IconBlockBottom = ({desktopContent, mobileContent}) => (
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
