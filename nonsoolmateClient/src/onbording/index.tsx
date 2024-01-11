import Advertise from "./components/advertise/Advertise";
import Banner from "./components/banner/Banner";
import FaQ from "./components/faq/FaQ";
import Footer from "./components/footer/Footer";
import Header from "../components/onbordingheader/Header";
import Univeristy from "./components/univeristy/Univeristy";

export default function OnBording() {
  return (
    <>
      <Header isOnbording={true} />
      <Banner />
      <Univeristy />
      <Advertise />
      <FaQ />
      <Footer />
    </>
  );
}
