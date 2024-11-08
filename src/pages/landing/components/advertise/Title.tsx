import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function Title() {
  return <Text>왜 논술메이트인가요?</Text>;
}

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};

  ${media.tablet} {
    ${({ theme }) => theme.fonts.Headline4};
  }
`;
