import { MembershipIc } from "@assets/index";
import Button from "@components/buttons/Button";
import PaymentInfo from "@pages/mypage/components/PaymentInfo";
import { MEMBERSHIP_DATA } from "@pages/mypage/constants/dummy";

import styled from "styled-components";

export default function MembershipInfo() {
  const data = MEMBERSHIP_DATA;
  return (
    <>
      {!!data.membership.name ? (
        <InfoWrapper>
          <MembershipWrapper>
            <Title>멤버십 정보</Title>
            <MembershipInfoLayout>
              <MembershipInfoContainer>
                <MembershipInfoBox>
                  <Membership>
                    <InfoTitle>이용 중인 멤버십</InfoTitle>
                    <CurrentMembership>
                      <MembershipIc />
                      <Info>{MEMBERSHIP_DATA.membership?.name}</Info>
                    </CurrentMembership>
                  </Membership>
                  <Button variant="text">멤버십 해지하기</Button>
                </MembershipInfoBox>

                <Membership>
                  <InfoTitle>이용 기간</InfoTitle>
                  <Info>
                    {MEMBERSHIP_DATA.membership?.startDate}~{MEMBERSHIP_DATA.membership?.endDate}
                  </Info>
                </Membership>
              </MembershipInfoContainer>
            </MembershipInfoLayout>
          </MembershipWrapper>
          <PaymentInfo />
        </InfoWrapper>
      ) : (
        <MembershipWrapper>
          <Title>멤버십 관리</Title>
          <NullMembershipContainer>
            <Text>이용 중인 멤버십이 없습니다.</Text>
            <Button variant="primary">멤버십 구매하기</Button>
          </NullMembershipContainer>
          <Notice>* 쿠폰 등록은 멤버십 구매 시에 가능합니다.</Notice>
        </MembershipWrapper>
      )}
    </>
  );
}

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const MembershipWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2.4rem 21.5rem 0 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};
`;

const MembershipInfoLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 8%);
`;

const MembershipInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  padding: 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Membership = styled.div`
  display: flex;
  gap: 2rem;
`;

const MembershipInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const Info = styled.div`
  ${({ theme }) => theme.fonts.Body4};
`;

const NullMembershipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;

const Text = styled.div`
  color: ${({ theme }) => theme.colors.grey_700};

  ${({ theme }) => theme.fonts.Body4};
`;

const Notice = styled.p`
  color: ${({ theme }) => theme.colors.grey_400};

  ${({ theme }) => theme.fonts.Body7};
`;
