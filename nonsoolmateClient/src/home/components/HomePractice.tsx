import styled from "styled-components";

export default function HomePractice() {
  return (
    <>
      <Header>나의 연습장</Header>
      <Content></Content>
    </>
  );
}

const Header = styled.h2`
  display: flex;
`;

const Content = styled.section`
  display: flex;
`;
