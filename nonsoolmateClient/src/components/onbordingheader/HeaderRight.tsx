import styled from "styled-components";
import LoginButton from "./buttons/LoginButton";
import MembershipButton from "./buttons/MembershipButton";
import { media } from "style/responsiveStyle";

export default function HeaderRight() {
  return (
    <Container>
      <MembershipButton />
      <LoginButton />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;

  height: 3.2rem;

  gap: 5.2rem;
  padding: 0 24.3rem 0 0;

  ${media.tablet} {
    padding: 0 3.2rem 0 0;
  }
`;
