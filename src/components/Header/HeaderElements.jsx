import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {fonts} from '../../config';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 0 11px;
  @media screen and (max-width: 768px) {
    padding: 0 11px 0 11px;
    min-height: 90px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 10px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoTitle = styled.h1`
  color: #0090c1;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 19px;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const StyledMobileLink = styled(Link)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuIcon = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
