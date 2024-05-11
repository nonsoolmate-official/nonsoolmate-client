import Header from "@components/onbordingheader/Header";
import styled from "styled-components";
import Contents from "./components/Contents";
import Title from "./components/Title";
import useGetName from "home/hooks/useGetName";
import HomeHeader from "home/components/HomeHeader";

export default function Membership() {
  const getNameResponse = useGetName();

  return (
    <Container>
      {getNameResponse ? <HomeHeader /> : <Header isOnboarding={false} />}
      <Title />
      <Contents />
    </Container>
  );
}

const Container = styled.section`
  position: relative;
`;
