import { useState } from "react";
import theme from "style/theme";
import styled from "styled-components";
import OrderDetail from "./OrderDetail";
import DiscountDetail from "./DiscountDetail";
import Overview from "./Overview";
import Agreements from "./Agreements";
import { calculateStandardDiscount } from "@pages/payment/utils/calculateStandardDiscount";
import { media } from "style/responsiveStyle";
import SuccessModal from "../SuccessModal";
import SelectUnivModal from "../teacherMatch/SelectUnivModal";
import RandomMatchModal from "../teacherMatch/RandomMatchModal";
import QuitMatchModal from "../teacherMatch/QuitMatchModal";
import useGetSingleProduct from "@pages/payment/hooks/useGetSingleProduct";
import { usePostMembership } from "@pages/payment/hooks/usePostMembership";
import { calcCouponDc } from "@pages/payment/utils/coupon";
import { PaymentWidgetInstance } from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";

interface PaymentInfoProps {
  id: number;
  selectedPlan: number;
  isSelctUnivOpen: boolean;
  changeSelectUnivModalStatus: (open: boolean) => void;
  changeSuccessModalStatus: (open: boolean) => void;
  changeRandomMatchModalStatus: (open: boolean) => void;
  isSucessOpen: boolean;
  isRandomMatchOpen: boolean;
  isQuitOpen: boolean;
  changeQuitModalStatus: (open: boolean) => void;
  activeCouponId: number | null;
  showNotRegisterError: (show: boolean) => void;
  showAlreadyPaidError: (show: boolean) => void;
  dcInfo: string;
  count: number;
  paymentWidget: PaymentWidgetInstance | null;
  customerName: string;
  customerEmail: string;
  updatePrice: (price: number) => void;
}

export default function PaymentInfo(props: PaymentInfoProps) {
  const {
    id,
    selectedPlan,
    isSelctUnivOpen,
    changeSelectUnivModalStatus,
    changeSuccessModalStatus,
    changeRandomMatchModalStatus,
    isSucessOpen,
    isRandomMatchOpen,
    changeQuitModalStatus,
    isQuitOpen,
    activeCouponId,
    showNotRegisterError,
    showAlreadyPaidError,
    dcInfo,
    count,
    paymentWidget,
    customerName,
    customerEmail,
    updatePrice,
  } = props;
  const [isAgree, setIsAgree] = useState(false);

  const { data } = useGetSingleProduct(selectedPlan);
  const { mutate: postMembership } = usePostMembership(
    changeSuccessModalStatus,
    showNotRegisterError,
    showAlreadyPaidError,
  );

  if (!data) {
    return <></>;
  }

  const plan = data;

  const originalPrice = plan?.price * count || 0;

  const discountHistory = plan.defaultDiscounts.length ? calculateStandardDiscount(plan, count) : [];

  const finalPrice_beforeCoupon = discountHistory.length
    ? discountHistory[discountHistory.length - 1].discountedPrice
    : originalPrice;

  const finalPrice_afterCoupon = calcCouponDc(dcInfo, finalPrice_beforeCoupon);
  sessionStorage.setItem("price", finalPrice_afterCoupon.toString());
  const discountedPrice = originalPrice - finalPrice_afterCoupon;

  function handleAgreements(agreeState: boolean) {
    setIsAgree(agreeState);
  }

  async function handlePayment(id: number) {
    if (id === 3) {
      // 단건 결제 요청 (paymentWidget 사용)
      const currentPrice = Number(sessionStorage.getItem("price"));
      updatePrice(currentPrice);
      if (!paymentWidget) return;

      try {
        await paymentWidget.requestPayment({
          orderId: nanoid(),
          orderName: "첨삭권",
          customerName: customerName,
          customerEmail: customerEmail,
          successUrl: `${window.location.origin}/single-payment/success`,
          failUrl: `${window.location.origin}/single-payment/fail`,
        });
      } catch (error) {
        console.error("Error requesting payment:", error);
      }
    } else {
      // 다른 결제 방식 처리 (단건 결제 외 로직)
      postMembership(
        {
          productId: selectedPlan,
          couponMemberId: activeCouponId,
        },
        {
          onSuccess: () => {
            if (activeCouponId) {
              sessionStorage.removeItem("couponTxt");
              sessionStorage.removeItem("dcInfo");
            }
          },
        },
      );
    }
  }

  return (
    <>
      <PaymentInfoContainer>
        <Title>결제 정보</Title>
        <InfoBox>
          <InfoTitle>주문 정보</InfoTitle>
          {plan && <OrderDetail plan={plan} count={count} />}
        </InfoBox>
        <InfoBox>
          <InfoTitle>할인 정보</InfoTitle>
          {plan && (
            <DiscountDetail
              discountHistory={discountHistory}
              dcInfo={dcInfo}
              finalPrice_beforeCoupon={finalPrice_beforeCoupon}
            />
          )}
        </InfoBox>
        <DevideLine />
        <Overview finalPrice_afterCoupon={finalPrice_afterCoupon} discountedPrice={discountedPrice} />
        <Agreements handleAgreements={handleAgreements} />
        <PaymentButton $isAgree={isAgree} disabled={!isAgree} type="button" onClick={() => handlePayment(id)}>
          결제하기
        </PaymentButton>
      </PaymentInfoContainer>
      {isSucessOpen && plan && (
        <SuccessModal
          finalPrice_afterCoupon={finalPrice_afterCoupon}
          changeSuccessModalStatus={changeSuccessModalStatus}
          changeSelectUnivModalStatus={changeSelectUnivModalStatus}
          planTitle={plan.productName}
        />
      )}
      {isSelctUnivOpen && (
        <SelectUnivModal
          changeSelectUnivModalStatus={changeSelectUnivModalStatus}
          changeRandomMatchModalStatus={changeRandomMatchModalStatus}
          changeQuitModalStatus={changeQuitModalStatus}
        />
      )}
      {isRandomMatchOpen && (
        <RandomMatchModal
          changeSelectUnivModalStatus={changeSelectUnivModalStatus}
          changeRandomMatchModalStatus={changeRandomMatchModalStatus}
          changeQuitModalStatus={changeQuitModalStatus}
        />
      )}
      {isQuitOpen && (
        <QuitMatchModal
          changeSelectUnivModalStatus={changeSelectUnivModalStatus}
          changeQuitModalStatus={changeQuitModalStatus}
        />
      )}
    </>
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
