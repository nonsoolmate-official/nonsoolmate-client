import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Summary() {
  return (
    <Container>
      <Text>입시논술을 가격부담없이 준비하고 싶다면?</Text>
      <Text> 지금 논술메이트로 대학별 최적화된 코칭을 받아보세요.</Text>
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}
`;

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.white};
`;
