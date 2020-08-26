import styled from 'styled-components';

export const TitlesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0 20px 0;
`;

export const DescriptionLeft = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 2px 9px rgba(0, 0, 0, 0.08), 0 0 0 2px rgba(0, 0, 0, 0.04);
  width: 35%;
  padding: 0 40px 30px 30px;
`;

export const ParagraphLeft = styled.p`
  padding-top: 30px;
  font-size: 18px;
`;

export const DescriptionRight = styled.div`
  width: 40%;
  padding: 40px 40px 20px 20px;
`;

export const ParagraphRight = styled.p`
  font-size: 16px;
`;
