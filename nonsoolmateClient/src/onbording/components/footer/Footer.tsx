import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import { columnFlex, commonFlex } from "style/commonStyle";
import DivideLine from "../common/DivideLine";

export default function Footer() {
  return (
    <Container>
      <DivideLineFooter />
      <ContentContainer>
        <FooterLeft />
        <FooterRight />
      </ContentContainer>
    </Container>
  );
}

const Container = styled.footer`
  ${columnFlex}

  width: 100%;
  height: 20.6rem;
`;

const DivideLineFooter = styled(DivideLine)`
  width: 100%;
`;

const ContentContainer = styled.div`
  ${commonFlex}

  justify-content: space-around;
  margin-top: 5.2rem;
`;
