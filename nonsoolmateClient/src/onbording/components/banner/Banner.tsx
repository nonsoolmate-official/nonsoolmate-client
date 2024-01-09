import styled from "styled-components";
import GotoSaleButton from "./GotoSaleButton";
import HomeImg from "./HomeImg";
import Summary from "./Summary";
import Title from "./Title";
import { columnFlex } from "style/commonStyle";

export default function Banner() {
  return (
    <Wrapper>
      <Container>
        <TextsContainer>
          <Title />
          <Summary />
          <GotoSaleButton />
        </TextsContainer>
        <HomeImg />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  ${columnFlex};

  justify-content: flex-end;
  width: 100%;
  height: 76.8rem;
  background: linear-gradient(to bottom, rgba(101 121 255) 20%, rgb(156 169 255) 100%);
`;

const Container = styled.div`
  ${columnFlex};

  gap: 3.2rem;
  justify-content: space-between;
`;

const TextsContainer = styled.div`
  ${columnFlex};

  gap: 2.8rem;
`;
