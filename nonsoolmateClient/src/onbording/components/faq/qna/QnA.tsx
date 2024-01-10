import DivideLine from "../DivideLine";
import { QnaTypes } from "../types/qaatypes";
import Answer from "./Answer";
import Question from "./Question";

interface QnAprops extends QnaTypes {}

export default function QnA(props: QnAprops) {
  const { question, answer, answer2 } = props;
  return (
    <>
      <Question question={question} />
      <Answer answer={answer} />
      {answer2 && <Answer answer={answer2} />}
      <DivideLine />
    </>
  );
}
