import { MembershipIc } from "@assets/index";
import Button from "@components/buttons/Button";
import { useModalDispatch } from "@hooks/useModal";
import PaymentInfo from "@pages/mypage/components/PaymentInfo";
import useGetMembership from "@pages/mypage/hooks/useGetMembership";
import usePatchMembershipStatus from "@pages/mypage/hooks/usePatchMembershipStatus";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

export default function MembershipInfo() {
  const navigate = useNavigate();

  const { data } = useGetMembership();
  const { mutate } = usePatchMembershipStatus();

  const dispatch = useModalDispatch();

  const handleResubscribe = () => {
    dispatch({ type: "SHOW_MODAL", variant: "description", descriptionType: "welcome" });
    mutate("IN_PROGRESS");
  };

  const handleCancelMembership = () => {
    dispatch({ type: "SHOW_MODAL", variant: "choice" });
    mutate("TERMINATED");
  };

  return (
    <>
      {data?.status === 200 ? (
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
                      <Info>{data.data.membershipName}</Info>
                    </CurrentMembership>
                  </Membership>

                  {new Date(data.data?.endDate).getTime() > new Date().getTime() ? (
                    <Button variant="text" onClick={handleCancelMembership}>
                      멤버십 해지하기
                    </Button>
                  ) : (
                    <Button variant="text" onClick={handleResubscribe}>
                      멤버십 연장하기
                    </Button>
                  )}
                </MembershipInfoBox>

                <Membership>
                  <InfoTitle>이용 기간</InfoTitle>
                  <Info>
                    {data.data.startDate}~{data.data.endDate}
                  </Info>
                </Membership>
              </MembershipInfoContainer>
            </MembershipInfoLayout>
          </MembershipWrapper>
          <PaymentInfo />
        </InfoWrapper>
      ) : data?.status === 204 ? (
        <MembershipWrapper>
          <Title>멤버십 관리</Title>
          <NullMembershipContainer>
            <Text>이용 중인 멤버십이 없습니다.</Text>
            <Button variant="primary" onClick={() => navigate("/membership")}>
              멤버십 구매하기
            </Button>
          </NullMembershipContainer>
          <Notice>* 쿠폰 등록은 멤버십 구매 시에 가능합니다.</Notice>
        </MembershipWrapper>
      ) : null}
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
