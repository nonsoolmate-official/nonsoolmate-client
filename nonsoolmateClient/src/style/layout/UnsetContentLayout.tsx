import { css } from "styled-components";

export const UnsetContentLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: 48.7rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
