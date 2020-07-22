import styled from 'styled-components';

import {Link} from 'react-router-dom';

export const MenuList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 40%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #005eb8;
  &:hover {
    color: #3a3a3a;
  }
`;
