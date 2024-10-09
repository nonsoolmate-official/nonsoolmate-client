import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PaymentInfo from "./components/paymentInfo/PaymentInfo";
import OrderInfo from "./components/orderInfo/OrderInfo";
import RegisterLayout from "./components/register/RegisterLayout";
import { useState } from "react";
import { media } from "style/responsiveStyle";
import HomeHeader from "@pages/home/components/HomeHeader";

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;
  const [selectedPlan, setSelectedPlan] = useState(id);

  function handlePlanChange(newPlanId: number) {
    setSelectedPlan(newPlanId);
  }

  return (
    <>
      <HomeHeader />
      <PaymentContainer>
        <PaymentLeftContainer>
          <Title>정기결제</Title>
          <OrderInfo id={id} selectedPlan={selectedPlan} onPlanChange={handlePlanChange} />
          <RegisterLayout />
        </PaymentLeftContainer>
        <PaymentInfo selectedPlan={selectedPlan} />
      </PaymentContainer>
    </>
  );
}

const PaymentContainer = styled.section`
  display: flex;
  flex-wrap: nowrap;
  gap: 2.4rem;
  align-self: flex-start;
  margin: 4.8rem 21.5rem;
  ${media.tablet} {
    flex-direction: column;
    gap: 5.6rem;
    margin: 4.8rem 3.2rem;
  }
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
