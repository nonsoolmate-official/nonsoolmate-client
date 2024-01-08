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

export const mainButtonStyle = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  font: ${({ theme }) => theme.fonts.Headline5};
  color: ${({ theme }) => theme.colors.white};
  ${commonFlex}
`;

export const lightBlueButtonStyle = styled.button`
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  font: ${({ theme }) => theme.fonts.Headline5};
  color: ${({ theme }) => theme.colors.main_blue};
  ${commonFlex}
`;

export const subButtonStyle = styled.button`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
  ${commonFlex}
`;

export const answerPageButtonStyle = styled.button`
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
  ${commonFlex}
`;
