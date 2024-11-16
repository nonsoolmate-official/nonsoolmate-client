import Header from "@components/header/Header";
import HomeHeader from "@pages/home/components/HomeHeader";
import useGetName from "@pages/home/hooks/useGetName";
import Advertise from "@pages/landing/components/advertise/Advertise";
import Banner from "@pages/landing/components/banner/Banner";
import Consulting from "@pages/landing/components/consulting/Consulting";
import FaQ from "@pages/landing/components/faq/FaQ";
import PracticeFeature from "@pages/landing/components/features/PracticeFeature";
import TestFeature from "@pages/landing/components/features/TestFeature";
import Footer from "@pages/landing/components/footer/Footer";
import Price from "@pages/landing/components/price/Price";
import RequestForm from "@pages/landing/components/requestForm/RequestForm";
import Review from "@pages/landing/components/review/Review";
import Univeristy from "@pages/landing/components/univeristy/Univeristy";
import { getToken } from "@pages/socialLogin/utils/token";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

export default function Landing() {
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;
  const isMobileSize = useMediaQuery({ query: "(max-width:430px)" });

  return (
    <LandingContainer $isMobileSize={isMobileSize}>
      <RequestForm />
      {getNameResponse ? <HomeHeader /> : <Header isLanding={false} />}
      <Banner />
      <Univeristy />
      <TestFeature />
      <PracticeFeature />
      <Consulting />
      <Price />
      <Review />
      <Advertise />
      <FaQ />
      <Footer />
    </LandingContainer>
  );
}

// overflow: hidden auto;
// position: relative;
// height: 100vh;

const LandingContainer = styled.section<{ $isMobileSize: boolean }>`
  overflow: ${({ $isMobileSize }) => ($isMobileSize ? "auto" : "hidden auto")};
  position: relative;
  height: ${({ $isMobileSize }) => ($isMobileSize ? "100%" : "100vh")};

  &::-webkit-scrollbar {
    display: none;
  }
`;
