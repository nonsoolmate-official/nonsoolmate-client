import styled from "styled-components";
import Buttons from "./Buttons";

export default function FooterRight() {
  return (
    <Container>
      <Buttons />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 2.2rem;
`;
