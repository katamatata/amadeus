import styled from 'styled-components';

import {fonts} from '../../config';

export const Title = styled.h1`
  font-family: ${fonts.lato};
  font-weight: 100;
  font-size: 42px;
  letter-spacing: -1.2px;
  padding-top: 30px;
  @media only screen and (max-width: 768px) {
    font-size: 28px;
    width: 50%;
    text-align: center;
  }
`;
