import React from 'react';

import {
  LogoWrapper,
  DesktopLogo,
  LogoText,
  DesktopLink,
  MobileLink,
} from './LogoElements';

export const Logo = ({logo, mobileLogo}) => (
  <>
    <DesktopLink to={logo.url}>
      <LogoWrapper>
        <DesktopLogo src={logo.imageSrc} alt={`${logo.altText}`} />
        <LogoText>{`${logo.text}`}</LogoText>
      </LogoWrapper>
    </DesktopLink>

    <MobileLink to={mobileLogo.url}>
      <img src={mobileLogo.imageSrc} alt={`${mobileLogo.altText}`} />
    </MobileLink>
  </>
);
