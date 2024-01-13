import styled from "styled-components";
import Buttons from "./Buttons";
import Sns from "./Sns";
import { commonFlex } from "style/commonStyle";

export default function FooterRight() {
  return (
    <Container>
      <Buttons />
      <Sns />
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}

  gap: 2.2rem;
`;
