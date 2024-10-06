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
            <Info>{PAYMENT_DATA.payment.couponInfo}</Info>
          </Payment>
          <Button variant="tertiary" size="sm">
            쿠폰 변경
          </Button>
        </PaymentInfoBox>

        <Payment>
          <InfoTitle>할인 이벤트</InfoTitle>
          <Info>{PAYMENT_DATA.payment.discountEvent}</Info>
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
`;

const Payment = styled.div`
  display: flex;

  height: 3.6rem;

  gap: 2rem;
`;

const PaymentInfoBox = styled.div`
  display: flex;

  align-items: center;

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

const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;

  margin: 0;

  border: none;

  background-color: ${({ theme }) => theme.colors.grey_200};
`;
