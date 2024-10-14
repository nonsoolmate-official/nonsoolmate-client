import { CouponIc, DiscountIc } from "@assets/index";
import Button from "@components/buttons/Button";
import useGetPayment from "@pages/mypage/hooks/useGetPayment";
import { formatDate } from "@pages/mypage/utils/date";
import styled from "styled-components";

export default function PaymentInfo() {
  const { data } = useGetPayment();

  const formattedDate = formatDate(data?.nextPaymentDate);

  return (
    <PaymentInfoWrapper>
      <Title>다음 결제 정보</Title>
      <PaymentInfoLayout>
        <Payment>
          <InfoTitle>다음 결제 일</InfoTitle>
          <Info>{formattedDate}</Info>
        </Payment>

        <PaymentInfoBox>
          <Payment>
            <InfoTitle>결제 수단</InfoTitle>
            <Info>{data?.paymentMethod}</Info>
          </Payment>
          <Button variant="text">결제 수단 변경하기</Button>
        </PaymentInfoBox>

        <PaymentInfoBox>
          <Payment>
            <InfoTitle>쿠폰 정보</InfoTitle>
            {data?.coupon && data.coupon.length > 0 ? (
              data.coupon.map((coupon) => (
                <EventInfoBox key={coupon.couponId}>
                  <CouponInfo>
                    <CouponIc />
                    {coupon.couponName}
                    <p>{coupon.discountRate * 100}&nbsp;OFF</p>
                  </CouponInfo>
                </EventInfoBox>
              ))
            ) : (
              <Info>등록된 쿠폰이 없습니다.</Info>
            )}
          </Payment>
          <Button variant="tertiary" width={12}>
            쿠폰 변경
          </Button>
        </PaymentInfoBox>

        <Payment>
          <InfoTitle>할인 이벤트</InfoTitle>

          {data?.discountEvent && data.discountEvent.length > 0 ? (
            data.discountEvent.map((discount) => (
              <EventInfoContainer key={discount.discountId}>
                <EventInfoBox>
                  <DiscountInfo>
                    <DiscountIc />
                    {discount.discountName}
                    <p>{discount.discountRate * 100}&nbsp;OFF</p>
                  </DiscountInfo>
                </EventInfoBox>
              </EventInfoContainer>
            ))
          ) : (
            <Info>진행중인 할인 이벤트가 없습니다.</Info>
          )}
        </Payment>

        <Divider />

        <Payment>
          <InfoTitle>총 할인가</InfoTitle>
          <Info>{data?.totalDiscountPrice}</Info>
        </Payment>

        <Payment>
          <InfoTitle>결제 예정 금액</InfoTitle>
          <Info>{data?.totalPrice}</Info>
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
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 2.4rem 21.5rem 7.6rem 2.4rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const PaymentInfoLayout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 69.6rem;
  padding: 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 12px 0 rgb(0 0 0 / 8%);
`;

const Payment = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
`;

const PaymentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoTitle = styled.h2`
  flex-shrink: 0;
  width: 11.2rem;

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
  gap: 1.6rem;
  align-items: flex-start;
  width: 100%;
`;

const EventInfoBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 37.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const CouponInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.fonts.Body4};

  white-space: nowrap;
`;

const DiscountInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
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
