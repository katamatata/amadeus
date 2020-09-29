import React from 'react';

import {ContentWrapper} from '../../common';

import Logo from './components/Logo';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';

import {NavBar, MobileMenuIcon} from './HeaderElements';

export const Header = ({content}) => {
  const {logo, mobileLogo, navBar, mobileMenu} = content;

  return (
    <header>
      <ContentWrapper>
        <NavBar>
          <Logo logo={logo} mobileLogo={mobileLogo} />
          <Menu content={navBar} />
          <MobileMenuIcon src={mobileMenu.imageSrc} alt={mobileMenu.altText} />
          <MobileMenu content={navBar} icon={mobileMenu} />
        </NavBar>
      </ContentWrapper>
    </header>
  );
};
