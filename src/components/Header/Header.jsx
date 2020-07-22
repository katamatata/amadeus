import React from 'react';

import {ContentWrapper} from '../../common';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';

import {
  NavBar,
  LogoWrapper,
  Logo,
  LogoTitle,
  StyledLink,
  StyledMobileLink,
  MobileMenuIcon,
} from './HeaderElements';

export const Header = ({contentForHeader}) => (
  <header>
    <ContentWrapper>
      <NavBar>
        <StyledLink to={contentForHeader.logo.url}>
          <LogoWrapper>
            <Logo src={contentForHeader.logo.imageSrc} alt="Amadeus logo" />
            <LogoTitle>{contentForHeader.logo.title}</LogoTitle>
          </LogoWrapper>
        </StyledLink>

        <StyledMobileLink to={contentForHeader.mobileLogo.url}>
          <img
            src={contentForHeader.mobileLogo.imageSrc}
            alt="Amadeus mobile logo"
          />
        </StyledMobileLink>

        <Menu contentForMenu={contentForHeader.navBar} />

        <MobileMenuIcon
          src={contentForHeader.mobileMenu.imageSrc}
          alt="Mobile menu icon"
        />

        <MobileMenu
          contentForMenu={contentForHeader.navBar}
          closeIcon={contentForHeader.mobileMenu}
        />
      </NavBar>
    </ContentWrapper>
  </header>
);
