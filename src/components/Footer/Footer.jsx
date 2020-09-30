import React from 'react';

import {ContentWrapper} from '../../common';
import FooterMenu from './components/FooterMenu';

import {NavBar, Copyright} from './FooterElements';

export const Footer = ({content}) => (
  <footer>
    <ContentWrapper>
      <NavBar>
        <Copyright>{content.copy}</Copyright>
        <FooterMenu content={content.menu} />
      </NavBar>
    </ContentWrapper>
  </footer>
);
