import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
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
