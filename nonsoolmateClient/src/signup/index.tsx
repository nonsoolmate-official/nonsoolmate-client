import styled from "styled-components";
import Login from "./components/login/Login";
import Logos from "./components/Logos";

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
