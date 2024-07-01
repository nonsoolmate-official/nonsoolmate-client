import { REASON_LIST } from "onboarding/core/reasons";
import Advertisement from "./Advertisement";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  margin-top: 5.6rem;
  gap: 2.4rem;
`;
