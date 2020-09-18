import styled from 'styled-components';

import {fonts} from '../../../../config';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media only screen and (min-width: 768px) and (max-width: 1023px) {
    justify-content: space-between;
  }
  @media only screen and (max-width: 767px) {
    justify-content: space-around;
  }
  @media only screen and (max-width: 320px) {
    justify-content: space-between;
  }
`;

export const CustomList = styled(List)`
  li {
    margin-left: 8px;
  }
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 767px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  }
`;

export const TextForIconBlock1 = styled.p`
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 28px;
  letter-spacing: -0.5px;
  padding-top: 10px;
  padding-bottom: 10px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 0;
  }
  @media only screen and (max-width: 767px) {
    padding: 0;
    margin-bottom: 15px;
  }
  @media only screen and (max-width: 414px) {
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
  }
`;

export const DesktopOnlyBlock = styled.div`
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

export const MobileOnlyBlock = styled.div`
  display: none;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    display: block;
  }
  @media only screen and (max-width: 767px) {
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
    left: -33px;
  }
  li:first-child:after {
    display: none;
  }
  @media only screen and (max-width: 767px) {
    li:after {
    left: -29px;
  }
`;
