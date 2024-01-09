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

  justify-content: flex-start;
`;

const Text = styled.p`
  width: 25.9rem;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body6};
`;
