import styled from 'styled-components';

import {Link} from 'react-router-dom';

import {fonts} from '../../../../config';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DesktopLogo = styled.img`
  margin-right: 10px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoText = styled.h1`
  color: #0090c1;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 19px;
  letter-spacing: -0.5px;
  margin-bottom: 6px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const DesktopLink = styled(Link)`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileLink = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
