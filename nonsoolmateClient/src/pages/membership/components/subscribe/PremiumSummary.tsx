import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function PremiumSummary() {
  return (
    <Container>
      <Text>첨삭권 4개</Text>
      <Text>모든 시험 재첨삭 가능</Text>
      <Text>유형별 연습문제</Text>
      <Text>+ 1:1 케어 서비스</Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  width: 25.6rem;
  height: 12.4rem;
  margin-bottom: 1.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Text = styled.p`
  ${commonFlex}

  width: 22.6rem;
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_700};
`;
