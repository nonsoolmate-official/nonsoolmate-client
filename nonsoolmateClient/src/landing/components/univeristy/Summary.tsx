import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Summary() {
  return (
    <Container>
      <Text>합격 답안 분석 데이터를 기반으로 한 대학별 선호 어휘, </Text>
      <Text>답안 구조 등을 학습하고, 대학별 맞춤 모의고사를 풀어보세요</Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};
`;
