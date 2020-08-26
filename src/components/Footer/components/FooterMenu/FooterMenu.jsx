import React from 'react';

import {NavLink} from '../../../Header/components/Menu/MenuElements';

import {MenuList, ListItem} from './FooterMenuElements';

export const FooterMenu = ({contentForFooterMenu}) => (
  <MenuList>
    {contentForFooterMenu.map((item) => (
      <ListItem key={item.title}>
        <NavLink to={item.url}>{item.title}</NavLink>
      </ListItem>
    ))}
  </MenuList>
);
