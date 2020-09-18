import styled from 'styled-components';

export const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px 0 20px 0;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    flex-direction: row;
    margin: 20px 20px 40px 20px;
  }
  @media only screen and (min-width: 200px) and (max-width: 767px) {
    flex-direction: column;
    padding: 0 30px;
    margin: 30px 0 50px 0;
  }
`;

export const DescriptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.08), 0 0 0 2px rgba(0, 0, 0, 0.04);
  width: 35%;
  padding: 0 40px 30px 30px;
  @media only screen and (max-width: 767px) {
    width: auto;
    margin-bottom: 50px;
    p:last-child {
      display: none;
    }
  }
`;

export const ParagraphLeft = styled.p`
  margin-top: 30px;
  font-size: 18px;
`;

export const DescriptionRight = styled.div`
  width: 40%;
  padding: 40px 40px 20px 20px;
  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 20px 20px;
  }
  @media only screen and (max-width: 767px) {
    width: auto;
    padding: 0;
  }
`;

export const ParagraphRight = styled.p`
  font-size: 16px;
  @media only screen and (max-width: 767px) {
    margin-bottom: 15px;
  }
`;