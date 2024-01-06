import styled, { css } from "styled-components";

export const commonFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const columnFlex = css`
  ${commonFlex};

  flex-direction: column;
`;

export const MainButtonStyle = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  font: ${({ theme }) => theme.fonts.Headline5};
  color: ${({ theme }) => theme.colors.white};
  ${commonFlex}
`;

export const LightBlueButtonStyle = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  font: ${({ theme }) => theme.fonts.Headline5};
  color: ${({ theme }) => theme.colors.main_blue};
  ${commonFlex}
`;

export const SubButtonStyle = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
  ${commonFlex}
`;

export const AnswerPageButtonStyle = styled.button`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
  ${commonFlex}
`;
