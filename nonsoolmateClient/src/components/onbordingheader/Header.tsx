import { commonFlex } from "style/commonStyle";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import styled from "styled-components";
import HomeMemberInfoToggle from "home/components/HomeMemberInfoToggle";
import { useState } from "react";

interface HeaderProps {
  isOnboarding: boolean;
}

export default function Header(props: HeaderProps) {
  const { isOnboarding } = props;
  const [showMemberInfo, setShowMemberInfo] = useState<boolean>(false);

  function handleHomeMemberInfoToggle() {
    setShowMemberInfo((open) => !open);
  }
  return (
    <>
      <Container $isOnboarding={isOnboarding}>
        <ContentContainer>
          <HeaderLeft />
          <HeaderRight handleHomeMemberInfoToggle={handleHomeMemberInfoToggle} showMemberInfo={showMemberInfo} />
        </ContentContainer>
      </Container>
      {showMemberInfo && <HomeMemberInfoToggle />}
    </>
  );
}
const Container = styled.header<{ $isOnboarding: boolean }>`
  ${commonFlex}

  width: 100%;
  height: 6.4rem;
  box-shadow: ${({ $isOnboarding }) => ($isOnboarding ? "none" : "0 0 12px 0 rgb(0 0 0 / 10%)")};
`;

const ContentContainer = styled.div`
  ${commonFlex}

  justify-content: space-between;
  width: 90.8rem;
`;
