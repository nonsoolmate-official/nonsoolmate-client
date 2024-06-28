import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import Login from "./components/login/Login";
import Logos from "./components/Logos";

export default function Signup() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container>
      {!isIpadSize && <Logos />}
      <Login />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;
