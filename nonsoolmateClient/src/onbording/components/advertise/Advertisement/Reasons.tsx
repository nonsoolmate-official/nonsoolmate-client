import { REASON_LIST } from "onbording/core/reasons";
import Advertisement from "./Advertisement";
import styled from "styled-components";
import { commonFlex } from "style/commonStyle";

export default function Reasons() {
  return (
    <Container>
      {REASON_LIST.map((reason) => {
        const { title, summary, img, summary2 } = reason;
        return <Advertisement key={summary} title={title} summary={summary} summary2={summary2} img={img} />;
      })}
    </Container>
  );
}

const Container = styled.section`
  ${commonFlex};

  flex-wrap: wrap;
  gap: 2.4rem;
  width: 93.6rem;
  height: 46.2rem;
  margin-top: 5.6rem;
`;
