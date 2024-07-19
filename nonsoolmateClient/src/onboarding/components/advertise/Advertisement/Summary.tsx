import { columnFlex } from "style/commonStyle";
import styled from "styled-components";

interface SummaryProp {
  summaryText: string;
  summaryText2: string;
}

export default function Summary(props: SummaryProp) {
  const { summaryText, summaryText2 } = props;
  return (
    <Container>
      <Text>{summaryText}</Text>
      <Text>{summaryText2}</Text>
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  align-items: flex-start;
  width: 25.9rem;
  margin-top: 0.4rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body6};
`;
