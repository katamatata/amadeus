import styled from 'styled-components';

import {fonts} from '../../config';

export const Title = styled.h1`
  font-family: ${fonts.lato};
  font-weight: 100;
  font-size: 42px;
  letter-spacing: -1.2px;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    span {
      display: inline;
    }
  }
  @media only screen and (max-width: 767px) {
    font-size: 28px;
    text-align: center;
    span {
      display: block;
    }
  }
`;
