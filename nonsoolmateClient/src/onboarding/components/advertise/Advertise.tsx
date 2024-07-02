import styled from "styled-components";
import Reasons from "./Advertisement/Reasons";
import Summary from "./Summary";
import Title from "./Title";
import { media } from "style/responsiveStyle";

export default function Advertise() {
  return (
    <Container>
      <Title />
      <Summary />
      <Reasons />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10rem 21.5rem 16rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  @media (width >= 768px) {
    padding: 8.6rem 2.4rem 11.6rem;
  }
`;
