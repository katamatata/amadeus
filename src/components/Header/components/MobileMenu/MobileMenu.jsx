import React from 'react';

import {
  Wrapper,
  IconWrapper,
  CloseIcon,
  MenuList,
  NavLink,
} from './MobileMenuElements';

export const MobileMenu = ({content, icon}) => (
  <Wrapper>
    <IconWrapper>
      <CloseIcon src={icon.iconSrc} />
    </IconWrapper>

    <MenuList>
      {content.map((item, index) => (
        <li key={index}>
          <NavLink to={item.url}>{item.title}</NavLink>
        </li>
      ))}
    </MenuList>
  </Wrapper>
);
