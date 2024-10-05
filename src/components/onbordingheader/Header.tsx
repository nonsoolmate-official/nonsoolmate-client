import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

import HomeMemberInfoToggle from "@pages/home/components/HomeMemberInfoToggle";
import { useState } from "react";

interface HeaderProps {
  isLanding: boolean;
}

export default function Header(props: HeaderProps) {
  const { isLanding } = props;
  const [showMemberInfo, setShowMemberInfo] = useState<boolean>(false);

  function handleHomeMemberInfoToggle() {
    setShowMemberInfo((open) => !open);
  }
  return (
    <>
      <Container $isLanding={isLanding}>
        <HeaderLeft />
        <HeaderRight handleHomeMemberInfoToggle={handleHomeMemberInfoToggle} showMemberInfo={showMemberInfo} />
      </Container>
      {showMemberInfo && <HomeMemberInfoToggle />}
    </>
  );
}

const Container = styled.header<{ $isLanding: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.4rem;
  border-bottom: 1px solid #ecedf0;
  box-shadow: ${({ $isLanding }) => ($isLanding ? "none" : "0 0 12px 0 rgb(0 0 0 / 10%)")};
`;
