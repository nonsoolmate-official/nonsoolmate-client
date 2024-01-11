import Header from "@components/onbordingheader/Header";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Contents from "./components/Contents";
import Title from "./components/Title";

export default function Membership() {
  return (
    <Container>
      <Header isOnbording={false} />
      <Title />
      <Contents />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  position: relative;
`;
