import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function BasicSummary() {
  return (
    <Container>
      <Text>첨삭권 4개</Text>
      <Text>재첨삭관 2개</Text>
      <Text>유형별 연습문제</Text>
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
