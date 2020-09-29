import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  padding: 0 11px;
  @media screen and (max-width: 768px) {
    padding: 0 11px 0 11px;
    min-height: 90px;
  }
`;

export const MobileMenuIcon = styled.img`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
