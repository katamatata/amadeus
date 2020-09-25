import styled from 'styled-components';

import {fonts} from '../../config';

export const DesktopSubtitle = styled.h2`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  margin: 10px 0 30px;
  display: block;
  @media only screen and (max-width: 1024px) {
    font-size: 22px;
  }
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileSubtitle = styled.h2`
  display: none;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 22px;
  letter-spacing: -0.5px;
  margin: 10px 0;
  @media only screen and (max-width: 768px) {
    display: block;
  }
  @media only screen and (max-width: 413px) {
    font-size: 18px;
  }
`;
