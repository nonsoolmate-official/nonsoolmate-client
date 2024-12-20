import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { FemaleStudentIc, MaleStudentIc, MonthlyMembershipGrayIc, NeutralStudentIc } from "@assets/index";
import Button from "@components/button/Button";
import useOutsideClick from "@hooks/useOutsideClick";
import useGetTicket from "@pages/home/hooks/useGetTicket";
import useGetProfile from "@pages/mypage/hooks/useGetProfile";
import { useRef } from "react";
import { media } from "style/responsiveStyle";
import { MODAL } from "../constants/modal";

interface UserInfoModalProps {
  onClose: () => void;
}

export default function UserProfileModal({ onClose }: UserInfoModalProps) {
  const navigate = useNavigate();
  const modalRef = useRef(null);

  useOutsideClick(modalRef, onClose);

  const { data } = useGetTicket();

  const { data: ProfileData } = useGetProfile();

  if (!data) return <></>;

  return (
    <BackgroundView>
      <UserProfileWrapper ref={modalRef}>
        <MemberInfo>
          {ProfileData?.data.gender === "M" ? (
            <MaleStudentIcon />
          ) : ProfileData?.data.gender === "F" ? (
            <FemaleStudentIcon />
          ) : (
            <NeutralStudentIcon />
          )}
          <Name>{data.memberName} 님</Name>
        </MemberInfo>
        <Line />
        <PlanBox>
          <MonthlyMembershipGrayIc />
          <PlanText>
            {data.membershipType === "BASIC"
              ? MODAL.MEMBERSHIP.BASIC
              : data.membershipType === "PREMIUM"
                ? MODAL.MEMBERSHIP.PREMIUM
                : MODAL.MEMBERSHIP.NONE}
          </PlanText>
        </PlanBox>
        <TicketCount>
          <Content>첨삭권</Content>
          <Content>{data.reviewTicketCount}개</Content>
        </TicketCount>
        <TicketCount>
          <Content>재첨삭권</Content>
          {data.membershipType === "PREMIUM" ? (
            <Content>무제한</Content>
          ) : (
            <Content>{data.reReviewticketCount}개</Content>
          )}
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

const MaleStudentIcon = styled(MaleStudentIc)`
  width: 4.4rem;
  height: 4.4rem;
`;

const FemaleStudentIcon = styled(FemaleStudentIc)`
  width: 4.4rem;
  height: 4.4rem;
`;

const NeutralStudentIcon = styled(NeutralStudentIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
