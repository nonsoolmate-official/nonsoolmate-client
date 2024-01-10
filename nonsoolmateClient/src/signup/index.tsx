import styled from "styled-components";
import Login from "./login/Login";
import Logos from "./logos/Logos";

export default function Signup() {
  return (
    <Container>
      <Logos />
      <Login />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;
