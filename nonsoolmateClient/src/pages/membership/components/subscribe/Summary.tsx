import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface SummaryProps {
  productDescriptions: string[];
}
export default function Summary({ productDescriptions }: SummaryProps) {
  return (
    <Container>
      {productDescriptions.map((item) => (
        <Text key={item}>{item}</Text>
      ))}
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}

  width: 25.6rem;
  height: 10.4rem;
  padding: 1.2rem 0.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Text = styled.p`
  ${commonFlex}

  width: 22.6rem;
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_700};
`;
