import styled from "styled-components";

interface AnswerProps {
  answer: string;
}

export default function Answer(props: AnswerProps) {
  const { answer } = props;
  return <Text>{answer}</Text>;
}

const Text = styled.h2`
  ${({ theme }) => theme.fonts.Body2};

  display: flex;
  width: 90rem;
`;
