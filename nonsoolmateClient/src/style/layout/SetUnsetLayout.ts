import { css } from "styled-components";
import { media } from "style/responsiveStyle";

export const SetUnsetContainerLayout = css`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: calc(100% - 43.1rem);
  height: 100%;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    width: 100%;
  }
`;

export const UnsetContentLayout = css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  height: 48.7rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_200};

  ${media.tablet} {
    height: 75.4rem;
  }
`;
