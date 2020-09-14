import styled from 'styled-components';

import {fonts} from '../../config';

export const DesktopSubtitle = styled.h2`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileSubtitle = styled.h2`
  display: none;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 18px;
  letter-spacing: -0.5px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;
