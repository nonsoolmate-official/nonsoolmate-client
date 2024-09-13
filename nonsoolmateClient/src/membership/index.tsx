import Header from "@components/onbordingheader/Header";
import styled from "styled-components";
import Contents from "./components/Contents";
import Title from "./components/Title";
import useGetName from "home/hooks/useGetName";
import HomeHeader from "home/components/HomeHeader";
import { getToken } from "socialLogin/utils/token";
import Event from "./event";
import Curriculum from "./curriculum";

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
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;
