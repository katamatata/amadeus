import React from 'react';

import {DesktopLink} from '../../components/Logo/LogoElements';

import {MenuList, NavLink} from './MenuElements';

export const Menu = ({content}) => (
  <MenuList>
    {content.map((item, index) => (
      <li key={index}>
        {item.imageSrc ? (
          <DesktopLink to={item.url}>
            <img src={item.imageSrc} alt={item.altText} />
          </DesktopLink>
        ) : (
          <NavLink to={item.url}>{item.title}</NavLink>
        )}
      </li>
    ))}
  </MenuList>
);
