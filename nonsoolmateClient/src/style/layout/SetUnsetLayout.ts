import { css } from "styled-components";

export const SetUnsetContainerLayout = css`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: calc(100% - 43.1rem);
  height: 100%;
  padding: 6.7rem 21.5rem 11.5rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

export const UnsetContentLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: 48.7rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
