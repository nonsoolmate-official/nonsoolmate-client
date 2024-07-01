import { columnFlex } from "style/commonStyle";
import Summary from "./Summary";
import Title from "./Title";
import UnivImgs from "./UnivImgs";
import styled from "styled-components";
import { media } from "style/responsiveStyle";

export default function Univeristy() {
  return (
    <Container>
      <Title />
      <Summary />
      <UnivImgs />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  width: 100%;
  /* height: 92.1rem; */
  padding: 20rem 0 28rem;

  ${media.tablet} {
    padding: 19.62rem 0 23.8rem;
  }
`;
