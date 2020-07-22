import React from 'react';

import {
  Wrapper,
  IconWrapper,
  CloseIcon,
  MenuList,
  NavLink,
} from './MobileMenuElements';

export const MobileMenu = ({contentForMenu, closeIcon}) => (
  <Wrapper>
    <IconWrapper>
      <CloseIcon src={closeIcon.iconSrc} />
    </IconWrapper>

    <MenuList>
      {contentForMenu.map((item) => (
        <li key={item.title}>
          <NavLink to={item.url}>{item.title}</NavLink>
        </li>
      ))}
    </MenuList>
  </Wrapper>
);
