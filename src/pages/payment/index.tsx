import HomeHeader from "@pages/home/components/HomeHeader";
import OrderInfo from "@pages/payment/components/orderInfo/OrderInfo";
import PaymentInfo from "@pages/payment/components/paymentInfo/PaymentInfo";
import RegisterLayout from "@pages/payment/components/register/RegisterLayout";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;
  const [selectedPlan, setSelectedPlan] = useState(id);

  function handlePlanChange(newPlanId: number) {
    setSelectedPlan(newPlanId);
  }

  // -------- 쿠폰 로직
  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [couponTxt, setCouponTxt] = useState("등록된 쿠폰이 없습니다.");
  const [dcInfo, setDcInfo] = useState("");

  function closeCouponModal() {
    setIsCouponOpen(false);
  }

  function openCouponModal() {
    setIsCouponOpen(true);
  }

  function handleCouponTxtStatus(coupon: string, dcInfo: string) {
    setCouponTxt(coupon);
    setDcInfo(dcInfo);
  }
  // ---------

  return (
    <>
      <HomeHeader />
      <PaymentContainer>
        <PaymentLeftContainer>
          <Title>정기결제</Title>
          <OrderInfo
            id={id}
            selectedPlan={selectedPlan}
            onPlanChange={handlePlanChange}
          />
          <RegisterLayout
            openCouponModal={openCouponModal}
            closeCouponModal={closeCouponModal}
            handleCouponTxtStatus={handleCouponTxtStatus}
            isCouponOpen={isCouponOpen}
            couponTxt={couponTxt}
            dcInfo={dcInfo}
          />
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
