import { columnFlex } from "style/commonStyle";
import Summary from "./Summary";
import Title from "./Title";
import UnivImgs from "./UnivImgs";
import styled from "styled-components";

export default function Univeristy() {
  return (
    <Container>
      <Title />
      <Summary />
      <UnivImgs />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  width: 100%;
  height: 92.1rem;
`;
