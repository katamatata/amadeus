import React from 'react';

import {ContentWrapper} from '../../common';
import Menu from './components/Menu';
import MobileMenu from './components/MobileMenu';

import {
  NavBar,
  LogoWrapper,
  Logo,
  LogoText,
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
            <Logo
              src={contentForHeader.logo.imageSrc}
              alt={contentForHeader.logo.altText}
            />
            <LogoText>{contentForHeader.logo.textLogo}</LogoText>
          </LogoWrapper>
        </StyledLink>

        <StyledMobileLink to={contentForHeader.mobileLogo.url}>
          <img
            src={contentForHeader.mobileLogo.imageSrc}
            alt={contentForHeader.mobileLogo.altText}
          />
        </StyledMobileLink>

        <Menu contentForMenu={contentForHeader.navBar} />

        <MobileMenuIcon
          src={contentForHeader.mobileMenu.imageSrc}
          alt={contentForHeader.mobileMenu.altText}
        />

        <MobileMenu
          contentForMenu={contentForHeader.navBar}
          closeIcon={contentForHeader.mobileMenu}
        />
      </NavBar>
    </ContentWrapper>
  </header>
);
