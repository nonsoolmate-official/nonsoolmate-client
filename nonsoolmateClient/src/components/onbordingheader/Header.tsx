import { commonFlex } from "style/commonStyle";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";

interface HeaderProps {
  isOnbording: boolean;
}

export default function Header(props: HeaderProps) {
  const { isOnbording } = props;

  return (
    <Container $isOnbording={isOnbording}>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
}

const Container = styled.header<{ $isOnbording: boolean }>`
  ${commonFlex}

  justify-content: space-around;
  width: 100%;
  height: 6.4rem;
  box-shadow: 
  ${($isOnbording) => ($isOnbording ?  0 0 12px 0 rgb(0 0 0 / 10%) : null)}
 
`;
