import { columnFlex } from "style/commonStyle";
import Summary from "./Summary";
import Title from "./Title";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function Univeristy() {
  return (
    <Container>
      <TextContainer>
        <Title />
        <Summary />
      </TextContainer>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  gap: 7.2rem;
  width: 100%;
  padding: 14.4rem 0;

  ${media.tablet} {
    padding: 19.62rem 0 23.8rem;
  }
`;

const TextContainer = styled.div`
  ${columnFlex}

  gap:1.6rem;
`;

const UnivImgsContainer = styled.div``;
