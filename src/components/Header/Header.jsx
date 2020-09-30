import React, {useState} from 'react';

import {ContentWrapper} from '../../common';

import Logo from './components/Logo';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';

import {NavBar, MobileMenuIcon} from './HeaderElements';

export const Header = ({content}) => {
  const {logo, mobileLogo, navBar, mobileMenu} = content;

  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  return (
    <header>
      <ContentWrapper>
        <NavBar>
          <Logo logo={logo} mobileLogo={mobileLogo} />
          <Menu content={navBar} />
          <MobileMenuIcon
            src={mobileMenu.imageSrc}
            alt={`${mobileMenu.altText}`}
            onClick={() => setIsMobileMenuOpened(true)}
          />
          {isMobileMenuOpened && (
            <MobileMenu
              content={navBar}
              icon={mobileMenu}
              onClose={() => setIsMobileMenuOpened(false)}
            />
          )}
        </NavBar>
      </ContentWrapper>
    </header>
  );
};
