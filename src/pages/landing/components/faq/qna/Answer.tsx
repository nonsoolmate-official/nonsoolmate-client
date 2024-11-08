import { media } from "style/responsiveStyle";
import theme from "style/theme";
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

  margin-left: 3.6rem;
  color: ${theme.colors.grey_8};

  ${media.mobile} {
    ${({ theme }) => theme.fonts.Body8};
  }
`;
