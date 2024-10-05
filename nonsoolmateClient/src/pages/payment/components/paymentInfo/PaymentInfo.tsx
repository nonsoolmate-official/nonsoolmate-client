import { PAYMENTINFO_LIST } from "@pages/payment/core/paymentInfoList";
import { useState } from "react";
import theme from "style/theme";
import styled from "styled-components";
import OrderDetail from "./OrderDetail";
import DiscountDetail from "./DiscountDetail";
import Overview from "./Overview";
import Agreements from "./Agreements";

interface PaymentInfoProps {
  selectedPlan: number;
}

export default function PaymentInfo({ selectedPlan }: PaymentInfoProps) {
  const plan = PAYMENTINFO_LIST.find((item) => item.id === selectedPlan);
  const [isAgree, setIsAgree] = useState(false);

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
        {plan && <DiscountDetail plan={plan} />}
      </InfoBox>
      <DevideLine />
      <Overview />
      <Agreements handleAgreements={handleAgreements} />
      <PaymentButton $isAgree={isAgree} disabled={!isAgree}>
        결제하기
      </PaymentButton>
    </PaymentInfoContainer>
  );
}

const PaymentInfoContainer = styled.article`
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
`;

const Title = styled.p`
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
  ${({ theme, $isAgree }) =>
    $isAgree ? `background-color : ${theme.colors.main_blue}` : `background-color : ${theme.colors.grey_100}`};

  ${({ theme, $isAgree }) => ($isAgree ? `color : ${theme.colors.white}` : `color : ${theme.colors.grey_400}`)}
`;
