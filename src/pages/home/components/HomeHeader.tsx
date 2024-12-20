import { DownArrowGreyIc, LoginInfoIc, LogoIc, UpArrowGreyIc } from "@assets/index";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

import UserProfileModal from "@pages/home/components/UserProfileModal";
import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";
import useGetName from "../hooks/useGetName";
import Button from "@components/button/Button";
import { openUrl } from "@utils/openUrl";

export default function HomeHeader() {
  const isMobileSize = useMediaQuery({ query: "(max-width:430px)" });
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });
  const [showMemberInfo, setShowMemberInfo] = useState<boolean>(false);
  const navigate = useNavigate();

  const getNameResponse = useGetName();
  if (!getNameResponse) return <></>;

  const {
    data: { memberName },
  } = getNameResponse;

  const handleHomeMemberInfoToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();

    setShowMemberInfo((open) => !open);
  };

  return (
    <>
      <Header>
        <LogoButton onClick={() => (getNameResponse ? navigate("/home/test") : navigate("/"))} type="button">
          <LogoIcon />
        </LogoButton>
        <HeaderInfo>
          {!isMobileSize && (
            <Buttons>
              <Button
                variant="guide"
                onClick={() => openUrl("https://nonsoolmatee.notion.site/808a224fdf664eb3bbf367d2db3ddb63?pvs=4")}>
                이용 가이드
              </Button>
            </Buttons>
          )}
          {!isIpadSize && (
            <MembershipButton type="button" onClick={() => navigate("/membership")}>
              멤버십
            </MembershipButton>
          )}
          <LoginInfoButton type="button" onClick={handleHomeMemberInfoToggle}>
            <LoginInfoIcon />
            <LoginInfoBox>
              <LoginId>{memberName} 님</LoginId>
              {showMemberInfo ? <UpArrowGreyIcon /> : <DownArrowGreyIcon />}
            </LoginInfoBox>
          </LoginInfoButton>
        </HeaderInfo>
      </Header>
      {showMemberInfo && <UserProfileModal onClose={() => setShowMemberInfo(false)} />}
    </>
  );
}

const Header = styled.header`
  ${commonFlex};

  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 1.6rem 21.5rem;
  border-bottom: 1px solid #ecedf0;
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

const Buttons = styled.div`
  display: flex;
  margin-right: 1rem;
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
