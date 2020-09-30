import React from 'react';

import {NavLink} from '../../../Header/components/Menu/MenuElements';

import {MenuList, ListItem} from './FooterMenuElements';

export const FooterMenu = ({content = []}) =>
  content.length ? (
    <MenuList>
      {content.map((item, index) => (
        <ListItem key={index}>
          <NavLink to={item.url}>{`${item.title}`}</NavLink>
        </ListItem>
      ))}
    </MenuList>
  ) : null;
