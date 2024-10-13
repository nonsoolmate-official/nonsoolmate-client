import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PaymentInfo from "./components/paymentInfo/PaymentInfo";
import OrderInfo from "./components/orderInfo/OrderInfo";
import RegisterLayout from "./components/register/RegisterLayout";
import { media } from "style/responsiveStyle";
import HomeHeader from "@pages/home/components/HomeHeader";
import { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/payment-sdk";
import useGetCustomerInfo from "./hooks/useGetCustomerInfo";

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;
  const storedId = sessionStorage.getItem("id");
  const initialId = storedId ? Number(storedId) : 0;

  const [selectedPlan, setSelectedPlan] = useState(id);
  const [activeCouponId, setActiveCouponId] = useState<number | null>(null);
  const [notRegisterError, setNotRegisterError] = useState(false);
  const [alreadyPaidError, setAlreadyPaidError] = useState(false);

  const [modalStatus, setModalStatus] = useState({
    isCouponOpen: false,
    isSelectUnivOpen: false,
    isSuccessOpen: false,
    isRandomMatchOpen: false,
    isQuitOpen: false,
  });

  const [couponTxt, setCouponTxt] = useState(() => sessionStorage.getItem("couponTxt") || "등록된 쿠폰이 없습니다.");
  const [dcInfo, setDcInfo] = useState(() => sessionStorage.getItem("dcInfo") || "");

  useEffect(() => {
    sessionStorage.setItem("couponTxt", couponTxt);
  }, [couponTxt]);

  useEffect(() => {
    sessionStorage.setItem("dcInfo", dcInfo);
  }, [dcInfo]);

  function handlePlanChange(newPlanId: number) {
    setSelectedPlan(newPlanId);
  }

  function handleActiveCouponId(isCouponActive: boolean, couponMemberId: number) {
    setActiveCouponId(isCouponActive ? null : couponMemberId);
  }

  function handleCouponTxtStatus(coupon: string, dcInfo: string) {
    setCouponTxt(coupon);
    setDcInfo(dcInfo);
  }

  function changeModalStatus(modalName: keyof typeof modalStatus, openModal: boolean) {
    setModalStatus((prevState) => ({
      ...prevState,
      [modalName]: openModal,
    }));
  }

  // -------- 카드 등록 로직
  const clientKey = `${import.meta.env.VITE_CLIENTKEY}`;
  const response = useGetCustomerInfo();
  if (!response) return <></>;
  const customerKey = response.customerKey;

  function registerCard() {
    loadTossPayments(clientKey).then((tossPayments) => {
      tossPayments
        .requestBillingAuth("카드", {
          customerKey,
          successUrl: `${window.location.origin}/success?id=${selectedPlan}`,
          failUrl: window.location.origin + "/fail",
        })
        .catch((error) => {
          if (error.code === "USER_CANCEL") {
            // 사용자가 결제창을 닫았을 때
          } else if (error.code === "INVALID_CARD_COMPANY") {
            // 유효하지 않은 카드 코드에 대한 처리
          }
        });
    });
  }
  // --------- 결제 에러 핸들링
  function showNotRegisterError(show: boolean) {
    setNotRegisterError(show);
  }

  function showAlreadyPaidError(show: boolean) {
    setAlreadyPaidError(show);
  }

  return (
    <>
      <HomeHeader />
      <PaymentContainer>
        <PaymentLeftContainer>
          <Title>정기결제</Title>
          <OrderInfo id={initialId} selectedPlan={selectedPlan} onPlanChange={handlePlanChange} />
          <RegisterLayout
            changeCouponModalStatus={(openModal) => changeModalStatus("isCouponOpen", openModal)}
            handleCouponTxtStatus={handleCouponTxtStatus}
            isCouponOpen={modalStatus.isCouponOpen}
            couponTxt={couponTxt}
            dcInfo={dcInfo}
            registerCard={registerCard}
            activeCouponId={activeCouponId}
            handleActiveCouponId={handleActiveCouponId}
            notRegisterError={notRegisterError}
            alreadyPaidError={alreadyPaidError}
          />
        </PaymentLeftContainer>
        <PaymentInfo
          selectedPlan={selectedPlan}
          isSelctUnivOpen={modalStatus.isSelectUnivOpen}
          changeSelectUnivModalStatus={(openModal) => changeModalStatus("isSelectUnivOpen", openModal)}
          isSucessOpen={modalStatus.isSuccessOpen}
          isQuitOpen={modalStatus.isQuitOpen}
          changeSuccessModalStatus={(openModal) => changeModalStatus("isSuccessOpen", openModal)}
          changeRandomMatchModalStatus={(openModal) => changeModalStatus("isRandomMatchOpen", openModal)}
          changeQuitModalStatus={(openModal) => changeModalStatus("isQuitOpen", openModal)}
          isRandomMatchOpen={modalStatus.isRandomMatchOpen}
          activeCouponId={activeCouponId}
          showNotRegisterError={showNotRegisterError}
          showAlreadyPaidError={showAlreadyPaidError}
          dcInfo={dcInfo}
        />
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
