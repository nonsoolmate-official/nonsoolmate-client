import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PaymentInfo from "./components/paymentInfo/PaymentInfo";
import OrderInfo from "./components/orderInfo/OrderInfo";
import RegisterLayout from "./components/register/RegisterLayout";
import { useState } from "react";

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;
  const [selectedPlan, setSelectedPlan] = useState(id);

  function handlePlanChange(newPlanId: number) {
    setSelectedPlan(newPlanId);
  }

  return (
    <PaymentContainer>
      <PaymentLeftContainer>
        <Title>정기결제</Title>
        <OrderInfo id={id} selectedPlan={selectedPlan} onPlanChange={handlePlanChange} />
        <RegisterLayout title="쿠폰 사용" button="쿠폰 사용" content="등록된 쿠폰이 없습니다." />
        <RegisterLayout title="결제 수단" button="카드 등록" content="등록된 카드가 없습니다." />
      </PaymentLeftContainer>
      <PaymentInfo selectedPlan={selectedPlan} />
    </PaymentContainer>
  );
}

const PaymentContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 2.4rem;
  align-self: flex-start;
  margin: 4.8rem 21.5rem;
`;

const PaymentLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
`;
const Title = styled.h1`
  ${({ theme }) => theme.fonts.Headline4}
`;
