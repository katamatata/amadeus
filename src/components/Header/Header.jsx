import React from 'react';

import {ContentWrapper} from '../../common';
import Menu from './components/Menu';

import {
  HeaderWrapper,
  NavBar,
  LogoWrapper,
  Logo,
  LogoTitle,
  StyledLink,
  StyledMobileLink,
  MobileMenuIcon,
} from './HeaderElements';

export const Header = ({contentForHeader}) => {
  console.log('Header content', contentForHeader);
  return (
    <HeaderWrapper>
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
        </NavBar>
      </ContentWrapper>
    </HeaderWrapper>
  );
};
