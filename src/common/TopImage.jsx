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
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    height: 200px;
    background-image: url('/${(props) => {
      return props.image;
    }}');
  }
  @media only screen and (max-width: 767px) {
    height: 150px;
    background-image: url('/${(props) => {
      return props.mobileImage;
    }}');
    background-position: 68% 32%;
  }
`;
