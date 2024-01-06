import styled from "styled-components";
export default function HomeStudy() {
  return (
    <>
      <Header>나의 학습장</Header>
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
