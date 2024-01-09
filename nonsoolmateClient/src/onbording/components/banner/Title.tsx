import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Title() {
  return (
    <Container>
      <Text>논술메이트,</Text> <Text> 논술입시 성공의 지름길</Text>
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}
`;

const Text = styled.h1`
  font: ${({ theme }) => theme.fonts.Headline1};
  color: ${({ theme }) => theme.colors.white};
`;
