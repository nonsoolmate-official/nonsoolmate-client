import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

interface AnswerProps {
  answer: string;
}

export default function Answer(props: AnswerProps) {
  const { answer } = props;
  return <Text>{answer}</Text>;
}

const Text = styled.h2`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Body2};

  justify-content: flex-start;
  width: 90rem;
`;
