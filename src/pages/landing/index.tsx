import styled from "styled-components";
import Header from "../../components/onbordingheader/Header";
import HomeHeader from "../home/components/HomeHeader";
import useGetName from "../home/hooks/useGetName";
import { getToken } from "../socialLogin/utils/token";
import Advertise from "./components/advertise/Advertise";
import Banner from "./components/banner/Banner";
import FaQ from "./components/faq/FaQ";
import PracticeFeature from "./components/features/PracticeFeature";
import TestFeature from "./components/features/TestFeature";
import Footer from "./components/footer/Footer";
import Price from "./components/price/Price";
import RequestForm from "./components/requestForm/RequestForm";
import Univeristy from "./components/univeristy/Univeristy";

export default function Landing() {
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;

  return (
    <LandingContainer>
      <RequestForm />
      {getNameResponse ? <HomeHeader /> : <Header isLanding={false} />}
      <Banner />
      <Univeristy />
      <TestFeature />
      <PracticeFeature />
      <Price />
      <Advertise />
      <FaQ />
      <Footer />
    </LandingContainer>
  );
}

const LandingContainer = styled.section`
  overflow: hidden auto;
  position: relative;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;
