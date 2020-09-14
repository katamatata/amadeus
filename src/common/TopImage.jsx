import styled from 'styled-components';

export const TopImage = styled.div`
  height: 220px;
  background-color: #d8d8d8;
  background-image: url('/${(props) => {
    return props.image;
  }}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  @media only screen and (max-width: 767px) {
    height: 150px;
    background-image: url('/${(props) => {
      return props.mobileImage;
    }}');
    background-position: 68% 32%;
  }
`;
