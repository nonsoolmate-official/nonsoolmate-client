import Advertise from "./components/advertise/Advertise";
import Banner from "./components/banner/Banner";
import FaQ from "./components/faq/FaQ";
import Footer from "./components/footer/Footer";
import Header from "../components/onbordingheader/Header";
import Univeristy from "./components/univeristy/Univeristy";
import HomeHeader from "home/components/HomeHeader";
import { getToken } from "socialLogin/utils/token";
import useGetName from "home/hooks/useGetName";

export default function OnBoarding() {
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;

  return (
    <>
      {getNameResponse ? <HomeHeader /> : <Header isOnboarding={false} />}
      <Banner />
      <Univeristy />
      <Advertise />
      <FaQ />
      <Footer />
    </>
  );
}
