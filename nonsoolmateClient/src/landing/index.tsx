import Advertise from "./components/advertise/Advertise";
import Banner from "./components/banner/Banner";
import FaQ from "./components/faq/FaQ";
import Footer from "./components/footer/Footer";
import Header from "../components/onbordingheader/Header";
import Univeristy from "./components/univeristy/Univeristy";
import HomeHeader from "home/components/HomeHeader";
import { getToken } from "socialLogin/utils/token";
import useGetName from "home/hooks/useGetName";
import RequestForm from "./components/requestForm/RequestForm";
import TestFeature from "./components/features/TestFeature";
import PracticeFeature from "./components/features/PracticeFeature";
import Price from "./components/price/Price";

export default function Landing() {
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;

  return (
    <>
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
    </>
  );
}
