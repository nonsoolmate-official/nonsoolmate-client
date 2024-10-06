import { MembershipIc } from "@assets/index";
import PaymentInfo from "@pages/mypage/components/PaymentInfo";
import { MEMBERSHIP_DATA } from "@pages/mypage/constants/dummy";

import styled from "styled-components";

export default function MembershipInfo() {
  return (
    <InfoWrapper>
      <MembershipWrapper>
        <Title>멤버십 정보</Title>
        <MembershipInfoLayout>
          <MembershipInfoContainer>
            <Membership>
              <InfoTitle>이용 중인 멤버십</InfoTitle>
              <CurrentMembership>
                <MembershipIc />
                <MembershipName>{MEMBERSHIP_DATA.membership.name}</MembershipName>
              </CurrentMembership>
            </Membership>
            <Membership>
              <InfoTitle>이용 기간</InfoTitle>
              <MembershipPeriod>{MEMBERSHIP_DATA.membership.period}</MembershipPeriod>
            </Membership>
          </MembershipInfoContainer>
        </MembershipInfoLayout>
      </MembershipWrapper>
      <PaymentInfo />
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  flex-direction: column;
`;

const MembershipWrapper = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;

  padding: 2.4rem 21.5rem 0rem 2.4rem;

  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};
`;

const MembershipInfoLayout = styled.section`
  display: flex;

  flex-direction: column;

  gap: 2.4rem;
`;

const MembershipInfoContainer = styled.div`
  display: flex;

  flex-direction: column;

  padding: 2.4rem;

  border-radius: 0.8rem;

  gap: 2.8rem;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Membership = styled.div`
  display: flex;

  gap: 2rem;
`;

const InfoTitle = styled.h2`
  width: 11.2rem;

  ${({ theme }) => theme.fonts.Body3};

  white-space: nowrap;
`;

const CurrentMembership = styled.div`
  display: flex;

  gap: 0.8rem;
`;

const MembershipName = styled.h3`
  ${({ theme }) => theme.fonts.Body4};
`;

const MembershipPeriod = styled.h3`
  ${({ theme }) => theme.fonts.Body4};
`;
