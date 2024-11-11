import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function Summary() {
  return <Text>논술메이트로 입시논술을 준비해야하는 6가지 이유</Text>;
}

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  margin-top: 1rem;

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body8};
  }
`;
