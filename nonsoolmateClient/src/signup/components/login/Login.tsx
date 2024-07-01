import styled from "styled-components";
import { Title } from "../../styles/title";
import NaverLoginButton from "./NaverLoginButton";
import SignupButton from "./SignupButton";
import SignupText from "./SignupText";
import { commonFlex } from "style/commonStyle";
import { LogoIc } from "@assets/index";
import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";

export default function Login() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container>
      {isIpadSize && <LogoIcon />}
      <Text>로그인</Text>
      <NaverLoginButton />
      <SignupContainer>
        <SignupText />
        <SignupButton />
      </SignupContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;

  /* padding: 29.8rem 0 0; */

  ${media.tablet} {
    justify-content: flex-start;
    width: 100%;
    padding: 31.8rem 21.2rem 0;
  }
`;

const LogoIcon = styled(LogoIc)`
  object-fit: cover;
  margin-bottom: 8rem;
`;

const Text = styled(Title)`
  margin-bottom: 1.6rem;
`;

const SignupContainer = styled.div`
  ${commonFlex}

  gap: 0.8rem;
  margin-top: 2.8rem;
`;
