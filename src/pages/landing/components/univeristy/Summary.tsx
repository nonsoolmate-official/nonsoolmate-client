import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Summary() {
  return (
    <Container>
      <Text>논술메이트, 목표 대학 선배가 내 러닝메이트가 되는 곳 </Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body2};

  color: ${({ theme }) => theme.colors.grey_700};
`;
