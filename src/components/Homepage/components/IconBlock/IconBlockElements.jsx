import styled from 'styled-components';

import {fonts} from '../../../../config';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 320px) {
    justify-content: space-between;
  }
`;

export const CustomList = styled(List)`
  li {
    margin-left: 8px;
  }
  @media only screen and (max-width: 1076px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 844px) {
    li {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 668px) {
    li {
      margin-left: 14px;
    }
  }
  @media only screen and (max-width: 414px) {
    li {
      margin-left: 8px;
    }
  }
  @media only screen and (max-width: 320px) {
    li {
      margin-left: 0;
    }
  }
`;

export const TextForIconBlock1 = styled.p`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  @media only screen and (max-width: 1024px) {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 668px) {
    margin: 0;
  }
  @media only screen and (max-width: 504px) {
    margin-bottom: 10px;
  }
`;

export const DesktopOnlyBlock = styled.div`
  @media only screen and (max-width: 1085px) {
    display: none;
  }
`;

export const MobileOnlyBlock = styled.div`
  display: none;
  @media only screen and (max-width: 1085px) {
    display: block;
  }
`;

export const ListWithArrows = styled(List)`
  li {
    font-size: 14px;
    font-weight: 300;
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
    left: -25px;
  }
  li:first-child:after {
    display: none;
  }
  @media only screen and (max-width: 1085px) {
    li:after {
      left: -35px;
  }
  @media only screen and (max-width: 964px) {
    li:after {
    left: -29px;
  }
  @media only screen and (max-width: 900px) {
    li:after {
    left: -25px;
  }
  @media only screen and (max-width: 736px) {
    li:after {
    left: -20px;
  }
  @media only screen and (max-width: 667px) {
    li:after {
    left: -60px;
  }
  @media only screen and (max-width: 414px) {
    li:after {
    left: -35px;
  }
  @media only screen and (max-width: 320px) {
    li:after {
    left: -25px;
  }
`;
