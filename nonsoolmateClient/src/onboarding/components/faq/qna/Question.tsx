import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { QnaToogleOpenIc, QnaToogleCloseIc } from "@assets/index";

interface QuestionProps {
  question: string;
  isToggleOpen: boolean;
  onClick: () => void;
}

export default function Question(props: QuestionProps) {
  const { question, onClick, isToggleOpen } = props;
  return (
    <Text onClick={onClick}>
      {isToggleOpen ? <QnaToogleOpenIcon /> : <QnaToogleCloseIcon />}
      {question}
    </Text>
  );
}

const Text = styled.h2`
  ${commonFlex}
  ${({ theme }) => theme.fonts.Body1};

  height: 6rem;
  cursor: pointer;
`;

const QnaToogleOpenIcon = styled(QnaToogleOpenIc)`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 0.8rem;
`;

const QnaToogleCloseIcon = styled(QnaToogleCloseIc)`
  width: 2.8rem;
  height: 2.8rem;
  margin-right: 0.8rem;
`;
