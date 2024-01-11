import styled from "styled-components";
import { lightBlueButtonStyle } from "style/commonStyle";
import { LoginInfoIc } from "@assets/index";
import { useNavigate } from "react-router-dom";

export default function HomeMemberInfoToggle() {
  const navigate = useNavigate();

  return (
    <BackgroundView>
      <MemberInfoToggleView>
        <MemberInfo>
          <LoginInfoIcon />
          <Info>
            <Name>류가은 님</Name>
            <TicketCount>
              <Text>남은 첨삭권</Text>
              <CountText>3개</CountText>
            </TicketCount>
          </Info>
        </MemberInfo>
        <Line />
        <LogoutButton type="button" onClick={() => navigate("/signup")}>
          로그아웃
        </LogoutButton>
      </MemberInfoToggleView>
    </BackgroundView>
  );
}

const BackgroundView = styled.section`
  position: relative;
`;

const MemberInfoToggleView = styled.section`
  ${({ theme }) => theme.effects.modal_shadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0.8rem;
  right: 21.5rem;
  width: 22.8rem;
  height: 12.8rem;
  padding: 2rem 2.4rem;
  border-radius: 8px;
  background-color: white;
`;

const MemberInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  width: 18rem;
`;

const LoginInfoIcon = styled(LoginInfoIc)`
  width: 4.4rem;
  height: 4.4rem;
`;

const Info = styled.section`
  display: flex;
  flex-direction: column;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Body3};
`;

const TicketCount = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Body6};
`;

const CountText = styled.p`
  ${({ theme }) => theme.fonts.Body5};
`;

const Line = styled.div`
  width: 17.2rem;
  margin-top: 1rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_200};
`;

const LogoutButton = styled(lightBlueButtonStyle)`
  ${({ theme }) => theme.fonts.Body5};

  width: 18rem;
  height: 100%;
  margin-top: 0.6rem;
  padding: 0;
  border-radius: 4px;
`;
