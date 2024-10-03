import { columnFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>역시나,</Text> <Text> 합격할 줄 알았어</Text>
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;

  ${media.tablet} {
    ${columnFlex}
  }
`;

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline1};

  color: ${({ theme }) => theme.colors.grey_1000};
`;
