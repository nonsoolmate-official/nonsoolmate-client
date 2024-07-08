import styled from "styled-components";
import { lightBlueButtonStyle } from "style/commonStyle";
import { LoginInfoIc } from "@assets/index";
import { useNavigate } from "react-router-dom";
import useGetTicket from "home/hooks/useGetTicket";
import { media } from "style/responsiveStyle";

export default function HomeMemberInfoToggle() {
  const navigate = useNavigate();

  const getTicketResponse = useGetTicket();
  if (!getTicketResponse) return <></>;

  const {
    data: { memberName, ticketCount },
  } = getTicketResponse;

  return (
    <BackgroundView>
      <MemberInfoToggleView>
        <MemberInfo>
          <LoginInfoIcon />
          <Info>
            <Name>{memberName} 님</Name>
            <TicketCount>
              <Text>남은 첨삭권</Text>
              <CountText>{ticketCount}개</CountText>
            </TicketCount>
          </Info>
        </MemberInfo>
        <Line />
        <MypageButton type="button">내 정보</MypageButton>
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
  height: 17rem;
  padding: 2rem 2.4rem;
  border-radius: 8px;
  background-color: white;

  ${media.tablet} {
    right: 3.2rem;
  }
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

const MypageButton = styled.button`
  display: flex;
  width: 100%;
  margin: 0.6rem 0;
  padding: 0.8rem 0.4rem;
  ${({ theme }) => theme.fonts.Body6};
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
  padding: 0;
  border-radius: 4px;
`;
