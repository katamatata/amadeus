import React from 'react';

import {StyledLink} from '../../HeaderElements';

import {MenuList, NavLink} from './MenuElements';

export const Menu = ({contentForMenu}) => (
  <MenuList>
    {contentForMenu.map((item) => (
      <li key={item.title}>
        {item.imageSrc ? (
          <StyledLink to={item.url}>
            <img src={item.imageSrc} alt="Letter icon" />
          </StyledLink>
        ) : (
          <NavLink to={item.url}>{item.title}</NavLink>
        )}
      </li>
    ))}
  </MenuList>
);
