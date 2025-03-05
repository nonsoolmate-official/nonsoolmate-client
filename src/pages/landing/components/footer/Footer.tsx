import styled from "styled-components";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";
import { media } from "style/responsiveStyle";

import NonsoolInfoImg from "@assets/image/nonsoolInfo.png";
import { openUrl } from "@utils/openUrl";
import { POLICIES } from "@pages/landing/constants/policies";

export default function Footer() {
  return (
    <Container>
      <ContentContainer>
        <FooterLeft />
        <FooterRight />
      </ContentContainer>
      <Info>
        <Title>논술메이트</Title>
        <NonsoolInfo src={NonsoolInfoImg} />
      </Info>
      <Policies>
        <Text onClick={() => openUrl(POLICIES.PRIVACY)}>개인정보 처리방침</Text>
        <Divide>|</Divide>
        <Text onClick={() => openUrl(POLICIES.USAGE)}>이용약관</Text>
      </Policies>
    </Container>
  );
}

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  padding: 2rem 0 3.6rem;
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

  ${media.mobile} {
    width: 100%;
    object-fit: contain;
  }
`;

const Policies = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;
  margin-bottom: 2.8rem;
`;

const Divide = styled.div`
  width: 0.07rem;
  height: 1.3rem;
  background-color: ${({ theme }) => theme.colors.grey_400};
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Policies};

  color: ${({ theme }) => theme.colors.black};
`;
