import { commonFlex } from "style/commonStyle";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
}

const Container = styled.header`
  ${commonFlex}

  justify-content: space-around;
  width: 100%;
  height: 6.4rem;
`;
