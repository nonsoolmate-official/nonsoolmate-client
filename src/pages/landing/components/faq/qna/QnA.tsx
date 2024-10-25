import { useState } from "react";
import styled from "styled-components";
import DivideLine from "../../common/DivideLine";
import { QnaTypes } from "../types/qaatypes";
import Answer from "./Answer";
import Question from "./Question";

interface QnAprops extends QnaTypes {}

export default function QnA(props: QnAprops) {
  const { question, answer, answer2, answer3 } = props;
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
          {answer3 && <Answer answer={answer3} />}
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
