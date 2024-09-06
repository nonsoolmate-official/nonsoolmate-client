import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Summary() {
  return (
    <Container>
      <Text>논술메이트의 첨삭 그 이상의 코칭을 경험하세요</Text>
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  color: ${({ theme }) => theme.colors.grey_700};
`;
