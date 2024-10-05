import styled from "styled-components";
import Sns from "./Sns";

export default function FooterRight() {
  return (
    <Container>
      <Sns />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
