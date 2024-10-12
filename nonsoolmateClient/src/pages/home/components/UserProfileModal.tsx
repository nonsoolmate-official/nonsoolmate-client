import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { MonthlyMembershipGrayIc } from "@assets/index";
import Button from "@components/buttons/Button";
import useOutsideClick from "@hooks/useOutsideClick";
import Error from "@pages/error";
import { USER } from "@pages/home/constants/dummy";
import useGetTicket from "@pages/home/hooks/useGetTicket";
import { useRef } from "react";
import { media } from "style/responsiveStyle";

interface UserInfoModalProps {
  onClose: () => void;
}

export default function UserProfileModal({ onClose }: UserInfoModalProps) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  const { data } = useGetTicket();
  if (!data) return <Error />;

  return (
    <BackgroundView>
      <UserProfileWrapper ref={modalRef}>
        <MemberInfo>
          <Profile src={USER.avatarUrl} />
          <Name>{data.memberName} 님</Name>
        </MemberInfo>
        <Line />
        <PlanBox>
          <MonthlyMembershipGrayIc />
          <PlanText>{data.membershipType === "BASIC" ? "베이직" : "프리미엄"} 플랜 이용 중</PlanText>
        </PlanBox>
        <TicketCount>
          <Content>첨삭권</Content>
          <Content>{data.reviewTicketCount}개</Content>
        </TicketCount>
        <TicketCount>
          <Content>재첨삭권</Content>
          <Content>{data.reReviewticketCount}개</Content>
        </TicketCount>
        <Line />
        <Button
          variant="tertiary"
          style={{ display: "flex", width: "100%", border: "none", padding: "0.8rem 0 0.8rem 0.4rem" }}>
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
  gap: 8px;
  align-items: center;
  position: fixed;
  top: 7.5rem;
  right: 21.5rem;
  z-index: 2;
  width: 22.8rem;
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

const Profile = styled.img`
  width: 4.4rem;
  height: 4.4rem;
  object-fit: cover;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Body3};
`;

const PlanBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  align-self: stretch;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const PlanText = styled.p`
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Caption1};
`;

const TicketCount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
