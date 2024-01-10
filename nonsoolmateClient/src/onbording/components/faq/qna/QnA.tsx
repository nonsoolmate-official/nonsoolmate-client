import { useState } from "react";
import DivideLine from "../DivideLine";
import { QnaTypes } from "../types/qaatypes";
import Answer from "./Answer";
import Question from "./Question";

interface QnAprops extends QnaTypes {
  handleToggleOpen: () => void;
  isToggleOpen: boolean;
}

export default function QnA(props: QnAprops) {
  const { question, answer, answer2 } = props;
  const [isToggleOpen, setIsToggleOpen] = useState<boolean>(false);

  function handleToggleOpen() {
    setIsToggleOpen(true);
  }

  return (
    <>
      <Question question={question} onClick={handleToggleOpen} />
      {isToggleOpen && (
        <>
          <Answer answer={answer} />
          {answer2 && <Answer answer={answer2} />}
        </>
      )}
      <DivideLine />
    </>
  );
}
