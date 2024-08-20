import { REASON_LIST } from "landing/core/reasons";
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
  display: grid;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  margin-top: 5.6rem;
  grid-template-columns: repeat(3, 1fr);

  @media (width <= 987px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
