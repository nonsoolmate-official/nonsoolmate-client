import styled from "styled-components";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";

import UserProfileModal from "@pages/home/components/UserProfileModal";
import { useState } from "react";
import { media } from "style/responsiveStyle";

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
      {showMemberInfo && <UserProfileModal onClose={() => setShowMemberInfo(false)} />}
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

  ${media.mobile} {
    height: 4.8rem;
  }
`;
