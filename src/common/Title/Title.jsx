import styled from 'styled-components';

import {fonts} from '../../config';

export const Title = styled.h1`
  font-family: ${fonts.lato};
  font-weight: 100;
  font-size: 42px;
  letter-spacing: -1.2px;
  @media only screen and (max-width: 1024px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 32px;
  }
  @media only screen and (max-width: 413px) {
    font-size: 28px; 
    text-align: center;
    span {
      display: block;
    }
`;
