import { css } from "styled-components";

export const UnsetContainerLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: calc(100% - 43.1rem);
  height: 100%;
  padding: 6.7rem 21.5rem 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
