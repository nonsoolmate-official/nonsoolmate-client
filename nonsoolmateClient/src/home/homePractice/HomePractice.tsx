import styled from "styled-components";

export default function HomePractice() {
  return (
    <Container>
      <Header>나의 학습장</Header>
      <Content></Content>
    </Container>
  );
}

const Header = styled.h2`
  display: flex;
`;

const Container = styled.section`
  display: flex;
  width: 93.5rem;
`;
const Content = styled.section`
  display: flex;
`;
