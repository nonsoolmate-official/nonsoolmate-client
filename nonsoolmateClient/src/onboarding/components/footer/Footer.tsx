import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import DivideLine from "../common/DivideLine";
import { media } from "style/responsiveStyle";
import Sns from "./Sns";

export default function Footer() {
  return (
    <Container>
      <DivideLine />
      <ContentContainer>
        <FooterLeft />
        <FooterRight />
      </ContentContainer>
      <Sns />
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 20.6rem;

  padding: 0 21.5rem;

  ${media.tablet} {
    padding: 0 2.4rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 5.2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;

    gap: 2rem;
  }
`;
