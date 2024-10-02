import { LogoIc, SignupIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import { Title } from "../styles/title";

export default function Logos() {
  return (
    <Container>
      <SignupIcon />
      <Text>논술입시의 여정을 함께하다</Text>
      <LogoIcon />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  width: 50%;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const SignupIcon = styled(SignupIc)`
  width: 32.6rem;
  height: 17.2rem;
  margin-bottom: 4.7rem;
`;

const Text = styled(Title)`
  margin-bottom: 1rem;
`;

const LogoIcon = styled(LogoIc)`
  width: 20.2rem;
  height: 2.6rem;
`;
