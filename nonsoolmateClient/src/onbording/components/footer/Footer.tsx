import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import { commonFlex } from "style/commonStyle";

export default function Footer() {
  return (
    <Container>
      <FooterLeft />
      <FooterRight />
    </Container>
  );
}

const Container = styled.footer`
  ${commonFlex}

  justify-content: space-around;
`;
