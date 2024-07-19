import styled from "styled-components";
import Summary from "./Summary";
import { media } from "style/responsiveStyle";

export default function Advantage() {
  return (
    <Container>
      <Summary />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${media.tablet} {
    width: 60rem;
  }
`;
