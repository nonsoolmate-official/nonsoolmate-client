import styled from "styled-components";
import Reasons from "./Advertisement/Reasons";
import Summary from "./Summary";
import { media } from "style/responsiveStyle";

export default function Advertise() {
  return (
    <Container>
      <Text>왜 논술메이트인가요?</Text>
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
  padding: 10rem 2rem 16rem;
  background-color: ${({ theme }) => theme.colors.grey_50};

  @media (width <= 768px) {
    padding: 8.6rem 2rem 11.6rem;
  }
`;

const Text = styled.h1`
  ${({ theme }) => theme.fonts.Headline2};

  ${media.tablet} {
    ${({ theme }) => theme.fonts.Headline4};
  }
`;
