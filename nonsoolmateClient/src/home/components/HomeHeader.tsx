import styled from "styled-components";

export default function HomeHeader() {
  return (
    <>
      <Header>
        <Logo>테스트입니다</Logo>
        <HeaderInfo>테스트입니다</HeaderInfo>
      </Header>
    </>
  );
}

const Header = styled.header`
  display: flex;
`;

const Logo = styled.button`
  display: flex;
`;

const HeaderInfo = styled.span`
  display: flex;
`;
