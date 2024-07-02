import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function BackgroundGrey() {
  return <Square />;
}

const Square = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 28.8rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    bottom: 64.1rem;
  }
`;
