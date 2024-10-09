import styled from "styled-components";
import { useLocation } from "react-router-dom";
import PaymentInfo from "./components/paymentInfo/PaymentInfo";
import OrderInfo from "./components/orderInfo/OrderInfo";
import RegisterLayout from "./components/register/RegisterLayout";
import { media } from "style/responsiveStyle";
import HomeHeader from "@pages/home/components/HomeHeader";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import CouponModal from "./components/CouponModal";

const clientKey = "test_gck_pP2YxJ4K87RzqvN0J4qJrRGZwXLO";
const customerKey = uuidv4();

interface Amount {
  currency: string;
  value: number;
}

interface WidgetPaymentMethodWidget {
  //
}

interface PaymentWidgets {
  setAmount(amount: Amount): Promise<void>;
  renderPaymentMethods(options: { selector: string; variantKey: string }): Promise<WidgetPaymentMethodWidget>;
  renderAgreement(options: { selector: string; variantKey: string }): Promise<void>;
  requestPayment(options: {
    orderId: string;
    orderName: string;
    successUrl: string;
    failUrl: string;
    customerEmail: string;
    customerName: string;
    customerMobilePhone: string;
  }): Promise<void>;
}

export default function Payment() {
  const location = useLocation();
  const { id } = location.state;
  const [selectedPlan, setSelectedPlan] = useState(id);

  function handlePlanChange(newPlanId: number) {
    setSelectedPlan(newPlanId);
  }
  /*--쿠폰-- */
  const [openModal, setOpenModal] = useState(false);
  const [couponTxt, setCouponTxt] = useState("등록된 쿠폰이 없습니다.");
  const [dcInfo, setDcInfo] = useState("");

  function closeCouponModal() {
    setOpenModal(false);
  }

  function openCouponModal() {
    setOpenModal(true);
  }

  function handleCouponTxtStatus(coupon: string, dcInfo: string) {
    setCouponTxt(coupon);
    setDcInfo(dcInfo);
  }
  /** */

  const [amount, setAmount] = useState<Amount>({
    currency: "KRW",
    value: 50_000,
  });
  const [ready, setReady] = useState(false);
  const [widgets, setWidgets] = useState<PaymentWidgets | null>(null);

  const generateRandomString = () => window.btoa(Math.random().toString()).slice(0, 20);
  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments = await loadTossPayments(clientKey);
      // 회원 결제
      const paymentWidgets = tossPayments.widgets({
        customerKey,
      });

      const customWidgets: PaymentWidgets = {
        setAmount: async (amount: Amount) => {
          await paymentWidgets.setAmount(amount);
        },
        renderPaymentMethods: async (options: { selector: string; variantKey: string }) => {
          return await paymentWidgets.renderPaymentMethods(options);
        },
        renderAgreement: async (options: { selector: string; variantKey: string }) => {
          await paymentWidgets.renderAgreement(options);
        },
        requestPayment: async (options: {
          orderId: string;
          orderName: string;
          successUrl: string;
          failUrl: string;
          customerEmail: string;
          customerName: string;
          customerMobilePhone: string;
        }) => {
          await paymentWidgets.requestPayment(options);
        },
      };

      setWidgets(customWidgets);
    }

    fetchPaymentWidgets();
  }, [clientKey, customerKey]);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (widgets == null) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets
          .renderPaymentMethods({
            selector: "#payment-method",
            variantKey: "DEFAULT",
          })
          .catch(console.error),
        // ------  이용약관 UI 렌더링 ------
        widgets
          .renderAgreement({
            selector: "#agreement",
            variantKey: "AGREEMENT",
          })
          .catch(console.error),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (widgets == null) {
      return;
    }

    widgets.setAmount(amount).catch(console.error);
  }, [widgets, amount]);

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
      {/*----쿠폰---------*/}
      <button type="button" onClick={openCouponModal}>
        쿠폰 사용
      </button>
      <CouponInfo>
        <h2>{couponTxt}</h2>
        <h2>{dcInfo}</h2>
      </CouponInfo>
      {openModal && <CouponModal closeModal={closeCouponModal} handleCouponTxtStatus={handleCouponTxtStatus} />}
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

const CouponInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;
