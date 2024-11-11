import styled from "styled-components";
import Sns from "./Sns";
import { media } from "style/responsiveStyle";

export default function FooterRight() {
  return (
    <Container>
      <Sns />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${media.mobile} {
    justify-content: flex-start;
  }
`;
