import styled from "styled-components";
import AdvanBox from "./AdvanBox";
import { media } from "style/responsiveStyle";

export default function Advantage() {
  return (
    <Container>
      <Header>멤버십 혜택</Header>
      <AdvanBox />
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.effects.membership_shadow};

  height: 40rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    width: 61.6rem;
    height: auto;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.4rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.Headline4};

  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;
