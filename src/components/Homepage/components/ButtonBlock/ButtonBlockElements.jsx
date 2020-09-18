import styled from 'styled-components';

export const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  align-items: center;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  background-color: white;
  padding: 14px 32px 16px 32px;
  width: 263px;
  border: 1px solid #005eb8;
  border-radius: 25px;
  color: #005eb8;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  &:hover {
    background-color: #005eb8;
    color: white;
  }
  @media only screen and (max-width: 767px) {
    margin-bottom: 30px;
  }
`;

export const Text = styled.p`
  margin: 0 30px;
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
