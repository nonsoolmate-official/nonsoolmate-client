import { REASON_LIST } from "@pages/landing/core/reasons";
import styled from "styled-components";
import Advertisement from "./Advertisement";
import { media } from "style/responsiveStyle";

export default function Reasons() {
  return (
    <Container>
      {REASON_LIST.map((reason) => {
        const { title, summary, summary2, lottie, lottieReset } = reason;
        return (
          <Advertisement
            key={summary}
            title={title}
            summary={summary}
            summary2={summary2}
            lottie={lottie}
            lottieReset={lottieReset}
          />
        );
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

  @media (width <= 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  ${media.mobile} {
    overflow-x: auto;
    width: 100%;
    grid-template-columns: none;
    grid-auto-flow: column;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
