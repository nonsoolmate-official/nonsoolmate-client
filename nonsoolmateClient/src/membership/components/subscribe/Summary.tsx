import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface SummaryProp {
  summary: string;
}

export default function Summary(props: SummaryProp) {
  const { summary } = props;
  return (
    <Container>
      <Text>{summary}</Text>
      <Text>학생들을 위한 이용권</Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  width: 25.6rem;
  height: 6.4rem;
  margin-bottom: 1.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Text = styled.p`
  ${commonFlex}

  width: 22.6rem;
  ${({ theme }) => theme.fonts.Body6};
  ${({ theme }) => theme.colors.grey_700};
`;
