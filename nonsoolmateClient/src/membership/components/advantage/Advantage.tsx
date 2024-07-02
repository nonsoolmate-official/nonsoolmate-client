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
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (width <= 1000px) {
    width: 60rem;
  }
`;
