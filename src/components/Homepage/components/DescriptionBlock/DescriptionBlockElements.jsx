import styled from 'styled-components';

export const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  @media only screen and (max-width: 689px) {
    margin: 30px 0 50px 0;
  }
  @media only screen and (max-width: 668px) {
    flex-direction: column;
    padding: 0 40px;
  }
  @media only screen and (max-width: 414px) {
    padding: 0 30px;
  }
`;

export const DescriptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.08), 0 0 0 2px rgba(0, 0, 0, 0.04);
  width: 35%;
  padding: 0 40px 30px 30px;
  margin-right: 30px;
  @media only screen and (max-width: 768px) {
    p:last-child {
      display: none;
    }
  }
  @media only screen and (max-width: 689px) {
    padding: 0 30px 30px;
    margin-right: 30px;
  }
  @media only screen and (max-width: 668px) {
    width: 100%;
    margin: 0 0 30px;
  }
`;

export const ParagraphLeft = styled.p`
  margin-top: 30px;
  font-size: 18px;
`;

export const DescriptionRight = styled.div`
  width: 40%;
  padding: 20px 20px 20px 50px;
  @media only screen and (max-width: 1024px) {
    padding: 20px 0 0 50px;
  }
  @media only screen and (max-width: 768px) {
    padding: 20px 0 0 40px;
  }
  @media only screen and (max-width: 689px) {
    padding: 20px 0 0 20px;
  }
  @media only screen and (max-width: 668px) {
    width: 100%;
    padding: 20px;
  }
  @media only screen and (max-width: 414px) {
    padding: 0;
  }
`;

export const ParagraphRight = styled.p`
  font-size: 16px;
`;
