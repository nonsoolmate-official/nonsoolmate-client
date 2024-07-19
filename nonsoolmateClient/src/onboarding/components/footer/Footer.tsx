import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import DivideLine from "../common/DivideLine";
import { media } from "style/responsiveStyle";

import NonsoolInfoImg from "@assets/image/nonsoolInfo.png";

export default function Footer() {
  return (
    <Container>
      <DivideLine />
      <ContentContainer>
        <FooterLeft />
        <FooterRight />
      </ContentContainer>
      <Info>
        <Title>논술메이트</Title>
        <NonsoolInfo src={NonsoolInfoImg} />
      </Info>
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
  justify-content: space-between;
  align-items: center;
  margin-top: 5.2rem;

  ${media.tablet} {
    flex-direction: column;
    gap: 2rem;
    align-items: flex-start;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 2rem 0 5.8rem;
`;

const Title = styled.p`
  color: ${({ theme }) => theme.colors.grey_600};
  ${({ theme }) => theme.fonts.Body5};
`;

const NonsoolInfo = styled.img`
  width: 33.6rem;
  padding: 0;
  border: none;
  background: none;
`;
