import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MonthlyMembershipGrayIc } from "@assets/index";
import Button from "@components/buttons/Button";
import useOutsideClick from "@hooks/useOutsideClick";
import { USER } from "@pages/home/constants/dummy";
import { useRef } from "react";
import { media } from "style/responsiveStyle";

export default function UserProfileModal({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  // const getTicketResponse = useGetTicket();
  // if (!getTicketResponse) return <></>;

  // const {
  //   data: { memberName, ticketCount },
  // } = getTicketResponse;

  return (
    <BackgroundView>
      <UserProfileWrapper ref={modalRef}>
        <MemberInfo>
          <Profile src={USER.avatarUrl} />
          <Name>{USER.userName} 님</Name>
        </MemberInfo>
        <Line />
        <PlanBox>
          <MonthlyMembershipGrayIc />
          <PlanText>{USER.planType} 플랜 이용 중</PlanText>
        </PlanBox>
        <TicketCount>
          <Content>첨삭권</Content>
          <Content>{USER.permissions.editCount}개</Content>
        </TicketCount>
        <TicketCount>
          <Content>재첨삭권</Content>
          <Content>{USER.permissions.reEditCount}개</Content>
        </TicketCount>
        <Line />
        <Button
          variant="tertiary"
          style={{ display: "flex", width: "100%", border: "none", padding: "0.8rem 0 0.8rem 0.4rem" }}
          onClick={() => navigate("/mypage")}>
          마이페이지
        </Button>
        <Button
          variant="secondary"
          style={{ width: "18rem", padding: "0.4rem 0.8rem" }}
          onClick={() => navigate("/signup")}>
          로그아웃
        </Button>
      </UserProfileWrapper>
    </BackgroundView>
  );
}

const BackgroundView = styled.section`
  position: relative;
`;

const UserProfileWrapper = styled.aside`
  ${({ theme }) => theme.effects.modal_shadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0.8rem;
  right: 21.5rem;
  z-index: 2;
  width: 22.8rem;
  padding: 2rem 2.4rem;
  gap: 0.8rem;
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

const Profile = styled.img`
  width: 4.4rem;
  height: 4.4rem;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Body3};
`;

const PlanBox = styled.div`
  display: flex;

  padding: 0.8rem;
  margin-bottom: 0.5rem;

  align-items: center;
  align-self: stretch;
  gap: 0.8rem;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const PlanText = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Caption1};
`;

const TicketCount = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
`;

const Content = styled.p`
  height: 3.2rem;
  padding: 0 0.8rem;

  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body6};
`;

const Line = styled.div`
  width: 100%;

  border-top: 1px solid ${({ theme }) => theme.colors.grey_200};
`;
