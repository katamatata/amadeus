import React from 'react';

import {
  List,
  CustomList,
  Text,
  DesktopOnlyBlock,
  MobileOnlyBlock,
  ListWithArrows,
} from './IconBlockElements';

export const IconBlockTop = ({content = []}) =>
  content.length ? (
    <CustomList>
      {content.map((item, index) => (
        <li key={index}>
          {item.imageSrc ? (
            <img src={item.imageSrc} alt={`${item.altText}`} />
          ) : (
            <Text>{`${item.text}`}</Text>
          )}
        </li>
      ))}
    </CustomList>
  ) : null;

export const IconBlockMiddle = ({content = []}) =>
  content.length ? (
    <List>
      {content.map((item, index) => (
        <li key={index}>
          <img src={item.imageSrc} alt={`${item.altText}`} />
        </li>
      ))}
    </List>
  ) : null;

export const IconBlockBottom = ({desktopContent = [], mobileContent = []}) => (
  <>
    {desktopContent.length && (
      <DesktopOnlyBlock>
        <ListWithArrows>
          {desktopContent.map((item, index) => (
            <li key={index}>{`${item}`}</li>
          ))}
        </ListWithArrows>
      </DesktopOnlyBlock>
    )}
    {mobileContent.length && (
      <MobileOnlyBlock>
        <ListWithArrows>
          {mobileContent.map((item, index) => (
            <li key={index}>{`${item}`}</li>
          ))}
        </ListWithArrows>
      </MobileOnlyBlock>
    )}
  </>
);
