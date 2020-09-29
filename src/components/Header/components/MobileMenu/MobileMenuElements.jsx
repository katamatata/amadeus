import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const Wrapper = styled.div`
  display: none;
  background-color: #005eb8;
  flex-direction: column;
  width: 85%;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1;
  @media screen and (max-width: 768px) {
    // display: flex;
    display: none;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const CloseIcon = styled.img`
  padding: 11px 11px 0 0;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 45%;
  li {
    width: 100%;
    text-align: center;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  padding: 16px;
  display: block;
  &:hover {
    color: #3a3a3a;
    background-color: #e9f4fc;
  }
`;
