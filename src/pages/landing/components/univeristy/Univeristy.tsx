import { columnFlex } from "style/commonStyle";
import Summary from "./Summary";
import Title from "./Title";
import styled from "styled-components";
import { media } from "style/responsiveStyle";
import UniversityCarousel from "./UniversityCarousel";

export default function Univeristy() {
  return (
    <Container>
      <TextContainer>
        <Title />
        <Summary />
      </TextContainer>
      <CarouselContainer>
        <UniversityCarousel />
      </CarouselContainer>
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

  ${media.mobile} {
    gap: 5.6rem;
    padding: 8rem 0;
  }
`;

const TextContainer = styled.div`
  ${columnFlex}

  gap:1.6rem;
`;

const CarouselContainer = styled.div`
  display: flex;
  width: 93.6rem;
  height: 100%;
`;
