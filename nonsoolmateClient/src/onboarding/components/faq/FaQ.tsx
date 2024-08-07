import styled from "styled-components";
import { QNA_LIST } from "./core/qnalist";
import DivideLine from "../common/DivideLine";
import QnA from "./qna/QnA";
import Title from "./Title";
import { media } from "style/responsiveStyle";

export default function FaQ() {
  return (
    <ContentContainer>
      <Title />
      <DivideLine />
      {QNA_LIST.map((qna) => {
        const { question, answer, answer2 } = qna;
        return <QnA key={question} question={question} answer={answer} answer2={answer2} />;
      })}
    </ContentContainer>
  );
}

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 14.8rem 21.5rem;

  ${media.tablet} {
    padding: 16rem 2.4rem;
  }
`;
