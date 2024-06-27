import styled from "styled-components";
import Reasons from "./Advertisement/Reasons";
import Summary from "./Summary";
import Title from "./Title";
import { media } from "style/responsiveStyle";
import { columnFlex } from "style/commonStyle";

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
  ${columnFlex}

  padding: 10rem 21.5rem 16rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    padding: 8.6rem 2.4rem 11.6rem;
  }
`;
