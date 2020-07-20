import styled from 'styled-components';
import {Link} from 'react-router-dom';

import {fonts} from '../../config';

export const HeaderWrapper = styled.header`
  padding: 28px 32px;
  border-bottom: 1px solid grey;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  margin-right: 10px;
`;

export const LogoTitle = styled.p`
  color: #0090c1;
  font-family: ${fonts.lato};
  font-weight: 300;
  font-size: 19px;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
`;

export const MenuItem = styled.li`
  color: #005eb8;
`;

export const NavLink = styled(Link)`
  color: #005eb8;
  &:hover {
    color: #3a3a3a;
  }
`;
