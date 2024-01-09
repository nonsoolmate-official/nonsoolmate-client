import { columnFlex } from "style/commonStyle";
import { css } from "styled-components";

export const UnsetContentLayout = css`
  ${columnFlex}

  gap: 0.8rem;
  align-items: center;
  height: calc(100% - 18.2rem);
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
