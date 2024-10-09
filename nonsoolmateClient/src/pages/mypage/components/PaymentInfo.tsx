import { CouponIc, DiscountIc } from "@assets/index";
import Button from "@components/buttons/Button";
import { PAYMENT_DATA } from "@pages/mypage/constants/dummy";
import styled from "styled-components";

export default function PaymentInfo() {
  return (
    <PaymentInfoWrapper>
      <Title>다음 결제 정보</Title>
      <PaymentInfoLayout>
        <Payment>
          <InfoTitle>다음 결제 일</InfoTitle>
          <Info>{PAYMENT_DATA.payment.dueDate}</Info>
        </Payment>

        <PaymentInfoBox>
          <Payment>
            <InfoTitle>결제 수단</InfoTitle>
            <Info>{PAYMENT_DATA.payment.paymentMethod}</Info>
          </Payment>
          <Button variant="text" size="sm">
            결제 수단 변경하기
          </Button>
        </PaymentInfoBox>

        <PaymentInfoBox>
          <Payment>
            <InfoTitle>쿠폰 정보</InfoTitle>
            {!!PAYMENT_DATA.payment.couponInfo ? (
              <EventInfoBox>
                <CouponInfo>
                  <CouponIc />
                  {PAYMENT_DATA.payment.couponInfo.name}
                  <p>{PAYMENT_DATA.payment.couponInfo.discount}&nbsp;OFF</p>
                </CouponInfo>
              </EventInfoBox>
            ) : (
              <Info>등록된 쿠폰이 없습니다.</Info>
            )}
          </Payment>
          <Button variant="tertiary" size="sm">
            쿠폰 변경
          </Button>
        </PaymentInfoBox>

        <Payment>
          <InfoTitle>할인 이벤트</InfoTitle>

          {!!PAYMENT_DATA.payment.discountEvent ? (
            <EventInfoContainer>
              <EventInfoBox>
                <DiscountInfo>
                  <DiscountIc />
                  {PAYMENT_DATA.payment.discountEvent.name}
                  <p>{PAYMENT_DATA.payment.discountEvent.discount}&nbsp;OFF</p>
                </DiscountInfo>
              </EventInfoBox>
            </EventInfoContainer>
          ) : (
            <Info>진행중인 할인 이벤트가 없습니다.</Info>
          )}
        </Payment>

        <Divider />

        <Payment>
          <InfoTitle>총 할인가</InfoTitle>
          <Info>{PAYMENT_DATA.payment.totalDiscount}</Info>
        </Payment>

        <Payment>
          <InfoTitle>결제 예정 금액</InfoTitle>
          <Info>{PAYMENT_DATA.payment.totalPrice}</Info>
        </Payment>
      </PaymentInfoLayout>
    </PaymentInfoWrapper>
  );
}

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline5};
`;

const PaymentInfoWrapper = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;

  padding: 2.4rem 21.5rem 7.6rem 2.4rem;

  gap: 2rem;

  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const PaymentInfoLayout = styled.section`
  display: flex;

  flex-direction: column;

  padding: 2.4rem;

  gap: 1.6rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.08);
`;

const Payment = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
`;

const PaymentInfoBox = styled.div`
  display: flex;

  align-items: flex-start;

  justify-content: space-between;
`;

const InfoTitle = styled.h2`
  width: 11.2rem;

  flex-shrink: 0;

  ${({ theme }) => theme.fonts.Body3};

  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;

  width: 100%;

  ${({ theme }) => theme.fonts.Body4};
`;

const EventInfoContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: flex-start;

  gap: 1.6rem;

  width: 100%;
`;

const EventInfoBox = styled.div`
  display: flex;

  flex-shrink: 0;

  width: 100%;
  max-width: 37.6rem;

  gap: 0.8rem;

  padding: 0.8rem 1.2rem;

  align-items: center;

  border-radius: 0.8rem;

  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const CouponInfo = styled.div`
  display: flex;

  width: 100%;

  justify-content: space-between;
  gap: 0.8rem;
  ${({ theme }) => theme.fonts.Body4};

  white-space: nowrap;
`;

const DiscountInfo = styled.div`
  display: flex;

  justify-content: space-between;

  gap: 0.8rem;

  width: 100%;

  ${({ theme }) => theme.fonts.Body4};
  white-space: nowrap;
`;

const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;

  margin: 0;

  border: none;

  background-color: ${({ theme }) => theme.colors.grey_200};
`;
