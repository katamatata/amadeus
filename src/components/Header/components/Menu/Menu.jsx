import React from 'react';

import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {MenuList, MenuItem, NavLink} from './MenuElements';

export const Menu = ({contentForMenu}) => {
  console.log('Menu content', contentForMenu);
  return (
    <MenuList>
      <MenuItem>
        <NavLink to={contentForMenu[0].url}>{contentForMenu[0].title}</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={contentForMenu[1].url}>{contentForMenu[1].title}</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={contentForMenu[2].url}>{contentForMenu[2].title}</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={contentForMenu[3].url}>{contentForMenu[3].title}</NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink to={contentForMenu[4].url}>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </MenuItem>
    </MenuList>
  );
};
