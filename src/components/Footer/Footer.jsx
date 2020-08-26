import React from 'react';

import {ContentWrapper} from '../../common';
import FooterMenu from './components/FooterMenu';

import {NavBar, Copyright} from './FooterElements';

export const Footer = ({contentForFooter}) => (
  <footer>
    <ContentWrapper>
      <NavBar>
        <Copyright>{contentForFooter.copy}</Copyright>
        <FooterMenu contentForFooterMenu={contentForFooter.menu} />
      </NavBar>
    </ContentWrapper>
  </footer>
);
