import { DiscountIc, SmallCouponIc } from "@assets/index";
import Button from "@components/button/Button";
import useGetPayment from "@pages/mypage/hooks/useGetPayment";
import { formatDate } from "@pages/mypage/utils/date";
import CouponModal from "@pages/payment/components/coupon/CouponModal";
import useGetCustomerInfo from "@pages/payment/hooks/useGetCustomerInfo";
import { registerCard } from "@utils/registerCard";
import { COUPON_NOT_REGISTER } from "constants/coupon";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function PaymentInfo() {
  const { data: NEXT_PAYMENT, refetch } = useGetPayment();

  useEffect(() => {
    refetch();
  }, [NEXT_PAYMENT, refetch]);

  const formattedDate = formatDate(NEXT_PAYMENT?.nextPaymentDate);

  const [isCouponOpen, setIsCouponOpen] = useState(false);
  const [activeCouponId, setActiveCouponId] = useState<number | null>(null);

  function handleActiveCouponId(isCouponActive: boolean, couponMemberId: number) {
    setActiveCouponId(isCouponActive ? null : couponMemberId);
  }

  function changeNextMonthCouponModalStatus(open: boolean) {
    setIsCouponOpen(open);
  }

  function openCouponModal() {
    changeNextMonthCouponModalStatus(true);
  }

  const from = location.pathname;
  sessionStorage.setItem("from", from);
  const clientKey = `${import.meta.env.VITE_CLIENTKEY}`;
  const customerResponse = useGetCustomerInfo();
  if (!customerResponse) {
    return <></>;
  }
  const customerKey = customerResponse.customerKey;

  function registerCardHandler() {
    const from = sessionStorage.getItem("from");
    registerCard({
      clientKey,
      customerKey,
      from: from || "",
    });
  }

  function handleCouponTxtStatus(coupon: string, dcInfo: string) {
    sessionStorage.setItem("next_dcInfo", dcInfo);
    sessionStorage.setItem("next_coupon", coupon);
  }

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
            <Info>{NEXT_PAYMENT?.paymentMethod}</Info>
          </Payment>
          <Button variant="text" onClick={registerCardHandler}>
            결제 수단 변경하기
          </Button>
        </PaymentInfoBox>
        <PaymentInfoBox>
          <Payment>
            <InfoTitle>쿠폰 정보</InfoTitle>
            {NEXT_PAYMENT?.coupon.couponId ? (
              <InfoContents key={NEXT_PAYMENT.coupon.couponId}>
                <InfoTxt>
                  <SmallCouponIcon />
                  {NEXT_PAYMENT.coupon.couponName}
                </InfoTxt>
                <DcInfo>{NEXT_PAYMENT.coupon.discountRate * 100}% OFF</DcInfo>
              </InfoContents>
            ) : (
              <Info>{COUPON_NOT_REGISTER}</Info>
            )}
          </Payment>
          <Button variant="tertiary" width={12} onClick={openCouponModal}>
            쿠폰 변경
          </Button>
        </PaymentInfoBox>
        {isCouponOpen && (
          <CouponModal
            handleCouponTxtStatus={handleCouponTxtStatus}
            changeCouponModalStatus={changeNextMonthCouponModalStatus}
            activeCouponId={activeCouponId}
            handleActiveCouponId={handleActiveCouponId}
            couponFrom="/mypage"
          />
        )}
        <Payment>
          <InfoTitle>할인 이벤트</InfoTitle>
          <EventContainer>
            {NEXT_PAYMENT?.discountEvent && NEXT_PAYMENT.discountEvent.length > 0 ? (
              NEXT_PAYMENT.discountEvent.map((discount) => (
                <InfoContents key={discount.discountId}>
                  <InfoTxt>
                    <DiscountIcon />
                    {discount.discountName}
                  </InfoTxt>
                  <DcInfo>{discount.discountRate * 100}% OFF</DcInfo>
                </InfoContents>
              ))
            ) : (
              <Info>진행중인 할인 이벤트가 없습니다.</Info>
            )}
          </EventContainer>
        </Payment>
        <Divider />
        {NEXT_PAYMENT && (
          <Payment>
            <InfoTitle>총 할인가</InfoTitle>
            <Info>{NEXT_PAYMENT.totalDiscountPrice.toLocaleString()}원</Info>
          </Payment>
        )}
        {NEXT_PAYMENT && (
          <Payment>
            <InfoTitle>결제 예정 금액</InfoTitle>
            <Info>{NEXT_PAYMENT?.totalPrice.toLocaleString()}원</Info>
          </Payment>
        )}
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
  align-items: baseline;
`;

const PaymentInfoBox = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InfoTitle = styled.h2`
  flex-shrink: 0;
  width: 11.2rem;

  ${({ theme }) => theme.fonts.Body3};

  text-align: left;
  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.fonts.Body4};
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

const InfoContents = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 37.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};

  @media (width <= 1024px) {
    width: 30rem;
  }

  @media (width <= 855px) {
    width: 20rem;
  }
`;

const InfoTxt = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_1000};
`;

const DcInfo = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  margin-left: auto;
  color: ${({ theme }) => theme.colors.grey_1000};
`;

const SmallCouponIcon = styled(SmallCouponIc)`
  width: 2rem;
  height: 2rem;
`;

const DiscountIcon = styled(DiscountIc)`
  width: 2rem;
  height: 2rem;
`;

const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
