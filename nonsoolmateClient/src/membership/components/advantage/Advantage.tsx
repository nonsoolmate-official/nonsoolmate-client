import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Summary from "./Summary";

export default function Advantage() {
  return (
    <Container>
      <Summary />
    </Container>
  );
}

const Container = styled.article`
  ${columnFlex}

  align-items: flex-start;
`;
