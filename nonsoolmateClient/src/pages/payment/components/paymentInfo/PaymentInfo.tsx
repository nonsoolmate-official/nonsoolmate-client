import { PAYMENTINFO_LIST } from "@pages/payment/core/paymentInfoList";
import { useState } from "react";
import theme from "style/theme";
import styled from "styled-components";
import OrderDetail from "./OrderDetail";
import DiscountDetail from "./DiscountDetail";
import Overview from "./Overview";
import Agreements from "./Agreements";
import { calculateStandardDiscount } from "@pages/payment/utils/calculateStandardDiscount";
import { media } from "style/responsiveStyle";

interface PaymentInfoProps {
  selectedPlan: number;
}

export default function PaymentInfo({ selectedPlan }: PaymentInfoProps) {
  const plan = PAYMENTINFO_LIST.find((item) => item.id === selectedPlan);
  const [isAgree, setIsAgree] = useState(false);

  const originalPrice = plan?.price || 0;

  const discountHistory = plan ? calculateStandardDiscount(plan) : [];
  const finalPrice = discountHistory[discountHistory.length - 1].discounted_price;
  const discountedPrice = originalPrice - finalPrice;

  function handleAgreements(agreeState: boolean) {
    setIsAgree(agreeState);
  }

  return (
    <PaymentInfoContainer>
      <Title>결제 정보</Title>
      <InfoBox>
        <InfoTitle>주문 정보</InfoTitle>
        {plan && <OrderDetail plan={plan} />}
      </InfoBox>
      <InfoBox>
        <InfoTitle>할인 정보</InfoTitle>
        {plan && <DiscountDetail discountHistory={discountHistory} />}
      </InfoBox>
      <DevideLine />
      <Overview finalPrice={finalPrice} discountedPrice={discountedPrice} />
      <Agreements handleAgreements={handleAgreements} />
      <PaymentButton $isAgree={isAgree} disabled={!isAgree} type="button">
        결제하기
      </PaymentButton>
    </PaymentInfoContainer>
  );
}

const PaymentInfoContainer = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-self: flex-start;
  width: 29.6rem;
  margin-top: 6.8rem;
  padding: 2.4rem;
  border: 1px solid ${theme.colors.grey_200};
  border-radius: 12px;
  ${({ theme }) => theme.effects.container_shadow};

  user-select: none;
  ${media.tablet} {
    width: 100%;
    margin: 0 0 7.2rem;
  }
`;

const Title = styled.h1`
  ${({ theme }) => theme.fonts.Body1}
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const InfoTitle = styled.p`
  ${({ theme }) => theme.fonts.Body5}

  color: ${theme.colors.grey_800};
`;

const DevideLine = styled.hr`
  height: 1px;
  margin: 0;
  border: 0;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;

const PaymentButton = styled.button<{ $isAgree: boolean }>`
  ${({ theme }) => theme.fonts.Body5}

  width: 100%;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${({ theme, $isAgree }) => ($isAgree ? theme.colors.main_blue : theme.colors.grey_100)};
  color: ${({ theme, $isAgree }) => ($isAgree ? theme.colors.white : theme.colors.grey_400)};
`;