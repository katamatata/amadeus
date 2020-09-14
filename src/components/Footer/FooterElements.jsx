import styled from 'styled-components';

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70px;
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    min-height: 90px;
  }
`;

export const Copyright = styled.p`
  color: #777;
  margin-right: 10px;
`;
