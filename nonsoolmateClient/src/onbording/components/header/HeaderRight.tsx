import styled from "styled-components";
import LoginButton from "./buttons/LoginButton";
import MembershipButton from "./buttons/MembershipButton";
import { commonFlex } from "style/commonStyle";

export default function HeaderRight() {
  return (
    <Container>
      <MembershipButton />
      <LoginButton />
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}

  justify-content: space-between;
  width: 16.2rem;
  height: 3.2rem;
`;
