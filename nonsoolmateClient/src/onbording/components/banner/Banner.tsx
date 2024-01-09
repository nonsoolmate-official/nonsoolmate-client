import styled from "styled-components";
import GotoSaleButton from "./GotoSaleButton";
import HomeImg from "./HomeImg";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";

export default function Banner() {
  return (
    <Container>
      <Title />
      <Summary />
      <GotoSaleButton />
      <HomeImg />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex};

  width: 100%;
  height: 76.8rem;
  background: linear-gradient(to bottom, rgb(100 120 255), rgb(255 255 255));
`;
