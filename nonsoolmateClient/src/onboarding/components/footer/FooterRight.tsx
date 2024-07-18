import styled from "styled-components";
import Buttons from "./Buttons";
import Sns from "./Sns";

export default function FooterRight() {
  return (
    <Container>
      <Buttons />
      <Sns />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
