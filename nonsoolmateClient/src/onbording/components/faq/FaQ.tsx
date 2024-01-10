import styled from "styled-components";
import { QNA_LIST } from "./core/qnalist";
import DivideLine from "./DivideLine";
import QnA from "./qna/QnA";
import Title from "./Title";
import { columnFlex, commonFlex } from "style/commonStyle";

export default function FaQ() {
  return (
    <Container>
      <ContentContainer>
        <Title />
        <DivideLine />
        {QNA_LIST.map((qna) => {
          const { question, answer, answer2 } = qna;
          return (
            <>
              <QnA question={question} answer={answer} answer2={answer2} />
            </>
          );
        })}
      </ContentContainer>
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex}

  width: 100%;
`;

const ContentContainer = styled.section`
  ${columnFlex}

  align-items: flex-start;
  width: 93.6rem;
  padding: 14.9rem 21.5rem;
`;
