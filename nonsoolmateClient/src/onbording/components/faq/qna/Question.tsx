import styled from "styled-components";

interface QuestionProps {
  question: string;
  onClick: () => void;
}

export default function Question(props: QuestionProps) {
  const { question, onClick } = props;
  return <Text onClick={onClick}>{question}</Text>;
}

const Text = styled.h2`
  ${({ theme }) => theme.fonts.Body1};
`;
