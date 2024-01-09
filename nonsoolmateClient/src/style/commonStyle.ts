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
  ${commonFlex}
  ${({ theme }) => theme.fonts.Headline5};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;

export const lightBlueButtonStyle = styled.button`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Headline5};

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
`;

export const subButtonStyle = styled.button`
  ${commonFlex}

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.light_blue};
  color: ${({ theme }) => theme.colors.main_blue};
`;

export const answerPageButtonStyle = styled.button`
  ${commonFlex}

  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
