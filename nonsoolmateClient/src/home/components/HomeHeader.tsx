import styled from "styled-components";
import { commonFlex } from "style/commonStyle";
import { LogoIc, LoginInfoIc, DownArrowGreyIc, UpArrowGreyIc } from "@assets/index";
import { useState } from "react";
import HomeMemberInfoToggle from "./HomeMemberInfoToggle";
import { useNavigate } from "react-router-dom";
import useGetName from "home/hooks/useGetName";
import { media } from "style/responsiveStyle";

export default function HomeHeader() {
  const [showMemberInfo, setShowMemberInfo] = useState<boolean>(false);
  const handleHomeMemberInfoToggle = () => {
    setShowMemberInfo((open) => !open);
  };
  const navigate = useNavigate();

  const getNameResponse = useGetName();
  if (!getNameResponse) return <></>;

  const {
    data: { memberName },
  } = getNameResponse;

  return (
    <>
      <Header>
        <LogoButton onClick={() => (getNameResponse ? navigate("/home/test") : navigate("/"))} type="button">
          <LogoIcon />
        </LogoButton>
        <HeaderInfo>
          <MembershipButton type="button" onClick={() => navigate("/membership")}>
            멤버십
          </MembershipButton>
          <LoginInfoButton type="button" onClick={handleHomeMemberInfoToggle}>
            <LoginInfoIcon />
            <LoginInfoBox>
              <LoginId>{memberName} 님</LoginId>
              {showMemberInfo ? <UpArrowGreyIcon /> : <DownArrowGreyIcon />}
            </LoginInfoBox>
          </LoginInfoButton>
        </HeaderInfo>
      </Header>
      {showMemberInfo && <HomeMemberInfoToggle />}
    </>
  );
}

const Header = styled.header`
  ${commonFlex};

  justify-content: space-between;
  position: sticky;
  top: 0;
  padding: 1.6rem 21.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 1.2rem 0 ${({ theme }) => theme.colors.grey_200};

  ${media.tablet} {
    padding: 1.6rem 3.2rem;
  }
`;

const LogoButton = styled.button`
  padding: 0;
  cursor: pointer;
`;

const LogoIcon = styled(LogoIc)`
  object-fit: cover;
`;

const HeaderInfo = styled.span`
  ${commonFlex};
`;

const MembershipButton = styled.button`
  ${({ theme }) => theme.fonts.Body3};

  padding: 0.4rem 1.6rem 0.4rem 0;
  color: ${({ theme }) => theme.colors.main_blue};
  cursor: pointer;
`;

const LoginInfoButton = styled.button`
  ${commonFlex};

  gap: 1rem;
  justify-content: space-between;
  padding: 0;
  cursor: pointer;
`;

const LoginInfoIcon = styled(LoginInfoIc)`
  object-fit: cover;
`;

const LoginInfoBox = styled.section`
  ${commonFlex};

  gap: 0.8rem;
  padding: 0.4rem 0;
`;

const LoginId = styled.h1`
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const DownArrowGreyIcon = styled(DownArrowGreyIc)`
  object-fit: cover;
  width: 2.4rem;
  height: 2.4rem;
`;

const UpArrowGreyIcon = styled(UpArrowGreyIc)`
  object-fit: cover;
  width: 2.4rem;
  height: 2.4rem;
`;
