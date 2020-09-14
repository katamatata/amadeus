import styled from 'styled-components';

import {fonts} from '../../../../config';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const TextForIconBlock1 = styled.p`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const DesktopTextForIconBlock3 = styled.p`
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileTextForIconBlock3 = styled.p`
  display: none;
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

export const ListWithArrows = styled(List)`
  li {
    position: relative;
  }
  li:after {
    content: '';
    display: block;
    width: 14px;
    height: 14px;
    background-image: url(/icons/ico-arrow.png);
    position: absolute;
    top: 3px;
    left: -33px;
  }
  li:first-child:after {
    display: none;
  }
`;
