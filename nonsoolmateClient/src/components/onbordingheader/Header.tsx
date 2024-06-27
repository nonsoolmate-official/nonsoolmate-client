import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";

interface HeaderProps {
  isOnboarding: boolean;
}

export default function Header(props: HeaderProps) {
  const { isOnboarding } = props;

  return (
    <Container $isOnboarding={isOnboarding}>
      <HeaderLeft />
      <HeaderRight />
    </Container>
  );
}

const Container = styled.header<{ $isOnboarding: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 6.4rem;
  box-shadow: ${({ $isOnboarding }) => ($isOnboarding ? "none" : "0 0 12px 0 rgb(0 0 0 / 10%)")};
`;
