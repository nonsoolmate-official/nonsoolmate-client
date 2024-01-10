import styled from "styled-components";

interface QuestionProps {
  question: string;
}

export default function Question(props: QuestionProps) {
  const { question } = props;
  return <Text>{question}</Text>;
}

const Text = styled.h2`
  ${({ theme }) => theme.fonts.Body1};
`;
