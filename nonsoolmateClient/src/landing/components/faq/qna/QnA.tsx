import { useState } from "react";
import { QnaTypes } from "../types/qaatypes";
import Answer from "./Answer";
import Question from "./Question";
import styled from "styled-components";
import DivideLine from "landing/components/common/DivideLine";

interface QnAprops extends QnaTypes {}

export default function QnA(props: QnAprops) {
  const { question, answer, answer2 } = props;
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  function handleToggleOpen() {
    setIsToggleOpen((prev) => !prev);
  }

  return (
    <>
      <Question isToggleOpen={isToggleOpen} question={question} onClick={handleToggleOpen} />
      {isToggleOpen && (
        <AnswerContainer>
          <Answer answer={answer} />
          {answer2 && <Answer answer={answer2} />}
        </AnswerContainer>
      )}
      <Line />
    </>
  );
}

const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.5rem;
`;

const Line = styled(DivideLine)`
  width: 100%;
`;
