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
      <ContentContainer>
        <HeaderLeft />
        <HeaderRight />
      </ContentContainer>
    </Container>
  );
}
const Container = styled.header<{ $isOnbording: boolean }>`
  ${commonFlex}

  width: 100%;
  height: 6.4rem;
  box-shadow: ${({ $isOnbording }) => ($isOnbording ? "none" : "0 0 12px 0 rgb(0 0 0 / 10%)")};
`;

const ContentContainer = styled.div`
  ${commonFlex}

  justify-content: space-between;
  width: 90.8rem;
`;
