import styled from 'styled-components';

import {fonts} from '../../config';

export const DesktopSubtitle = styled.h2`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  margin: 10px 0;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileSubtitle = styled.h2`
  display: none;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.5px;
  margin: 10px 0;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    display: block;
  }
`;
