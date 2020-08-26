import styled from 'styled-components';

export const ButtonsWrapper = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  align-items: center;
`;

export const Button = styled.button`
  background-color: white;
  padding: 14px 32px 16px 32px;
  width: 263px;
  border: 1px solid #005eb8;
  border-radius: 25px;
  color: #005eb8;
  cursor: pointer;
  &:hover {
    background-color: #005eb8;
    color: white;
  }
`;

export const Text = styled.p`
  margin: 0 30px;
`;