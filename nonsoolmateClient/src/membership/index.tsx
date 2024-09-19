import Header from "@components/onbordingheader/Header";
import styled from "styled-components";
import Contents from "./components/Contents";
import Title from "./components/Title";
import useGetName from "home/hooks/useGetName";
import HomeHeader from "home/components/HomeHeader";
import { getToken } from "socialLogin/utils/token";
import Event from "./event";
import Curriculum from "./curriculum";
import { FooterLogoIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import Footer from "landing/components/footer/Footer";

export default function Membership() {
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;

  return (
    <Container>
      {getNameResponse ? <HomeHeader /> : <Header isLanding={false} />}
      <Title />
      <Contents />
      <Event />
      <Curriculum />
      <LogoContainer>
        <Phrase>논술입시 최고의 러닝메이트, 논술메이트</Phrase>
        <LogoIcon />
      </LogoContainer>
      <Footer />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;

const LogoContainer = styled.div`
  ${columnFlex}

  gap: 3.2rem;
  padding: 10.4rem 0;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Phrase = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Headline4};
`;

const LogoIcon = styled(FooterLogoIc)`
  width: 304px;
  height: 42.419px;
`;
