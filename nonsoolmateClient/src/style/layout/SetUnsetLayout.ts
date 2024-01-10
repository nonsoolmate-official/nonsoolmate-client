import { columnFlex } from "style/commonStyle";
import { css } from "styled-components";

export const SetUnsetContainerLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  overflow: scroll;
  width: calc(100% - 43.1rem);
  height: 100%;
  padding: 6.7rem 21.5rem 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

export const UnsetContentLayout = css`
  ${columnFlex}

  gap: 0.8rem;
  align-items: center;
  height: calc(100% - 18.2rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
