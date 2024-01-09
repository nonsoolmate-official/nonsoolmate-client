import styled from "styled-components";
import Reasons from "./Advertisement/Reasons";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";

export default function Advertise() {
  return (
    <Container>
      <Title />
      <Summary />
      <Reasons />
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex}

  width: 100%;
  height: 86rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
