import LoginButton from "@components/buttons/LoginButton";
import { commonFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import MembershipButton from "../buttons/MembershipButton";

import { DownArrowGreyIc, LoginInfoIc, UpArrowGreyIc } from "@assets/index";
import useGetName from "@pages/home/hooks/useGetName";
import { getToken } from "@pages/socialLogin/utils/token";

interface HeaderRightProps {
  handleHomeMemberInfoToggle: () => void;
  showMemberInfo: boolean;
}
export default function HeaderRight(props: HeaderRightProps) {
  const { handleHomeMemberInfoToggle, showMemberInfo } = props;
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;
  if (!getNameResponse)
    return (
      <Container>
        <MembershipButton />
        <LoginButton />
      </Container>
    );

  const {
    data: { memberName },
  } = getNameResponse;

  return (
    <Container>
      <MembershipButton />
      {getNameResponse && (
        <LoginInfoButton type="button" onClick={handleHomeMemberInfoToggle}>
          <LoginInfoIcon />
          <LoginInfoBox>
            <LoginId>{memberName} 님</LoginId>
            {showMemberInfo ? <UpArrowGreyIcon /> : <DownArrowGreyIcon />}
          </LoginInfoBox>
        </LoginInfoButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 4.8rem;
  align-items: center;
  height: 3.2rem;
  padding: 0 24.3rem 0 0;

  ${media.tablet} {
    padding: 0 3.2rem 0 0;
  }
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
