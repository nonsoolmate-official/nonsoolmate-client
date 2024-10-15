import { DiscountIc, SmallCouponIc } from "@assets/index";
import Button from "@components/buttons/Button";
import useGetCustomerInfo from "@pages/payment/hooks/useGetCustomerInfo";
import useGetPayment from "@pages/mypage/hooks/useGetPayment";
import { formatDate } from "@pages/mypage/utils/date";
import CouponModal from "@pages/payment/components/coupon/CouponModal";
import { COUPON_NOT_REGISTER } from "constants/coupon";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { registerCard } from "@utils/registerCard";

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
            {NEXT_PAYMENT?.coupon ? (
              <Coupon key={NEXT_PAYMENT.coupon.couponId}>
                <CouponTxt>
                  <SmallCouponIcon />
                  {NEXT_PAYMENT.coupon.couponName}
                </CouponTxt>
                <DcInfo>{NEXT_PAYMENT.coupon.discountRate * 100}%OFF</DcInfo>
              </Coupon>
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
            changeCouponModalStatus={changeNextMonthCouponModalStatus}
            activeCouponId={activeCouponId}
            handleActiveCouponId={handleActiveCouponId}
            couponFrom="/mypage"
          />
        )}
        <Payment>
          <InfoTitle>할인 이벤트</InfoTitle>

          {NEXT_PAYMENT?.discountEvent && NEXT_PAYMENT.discountEvent.length > 0 ? (
            NEXT_PAYMENT.discountEvent.map((discount) => (
              <EventInfoContainer key={discount.discountId}>
                <EventInfoBox>
                  <DiscountInfo>
                    <DiscountIc />
                    {discount.discountName}
                    <p>{discount.discountRate * 100}&nbsp;OFF</p>
                  </DiscountInfo>
                </EventInfoBox>
              </EventInfoContainer>
            ))
          ) : (
            <Info>진행중인 할인 이벤트가 없습니다.</Info>
          )}
        </Payment>

        <Divider />

        <Payment>
          <InfoTitle>총 할인가</InfoTitle>
          <Info>{NEXT_PAYMENT?.totalDiscountPrice}</Info>
        </Payment>

        <Payment>
          <InfoTitle>결제 예정 금액</InfoTitle>
          <Info>{NEXT_PAYMENT?.totalPrice}</Info>
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
  align-items: flex-start;
`;

const PaymentInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const InfoTitle = styled.h2`
  flex-shrink: 0;
  width: 11.2rem;

  ${({ theme }) => theme.fonts.Body3};

  white-space: nowrap;
`;

const Info = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => theme.fonts.Body4};
`;

const EventInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  align-items: flex-start;
  width: 100%;
`;

const EventInfoBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  max-width: 37.6rem;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Coupon = styled.div`
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

const CouponTxt = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_1000};
`;

const DcInfo = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  color: ${({ theme }) => theme.colors.grey_1000};
`;

const SmallCouponIcon = styled(SmallCouponIc)`
  width: 2rem;
  height: 2rem;
`;

const DiscountInfo = styled.div`
  display: flex;
  gap: 0.8rem;
  justify-content: space-between;
  width: 100%;

  ${({ theme }) => theme.fonts.Body4};

  white-space: nowrap;
`;

const Divider = styled.hr`
  width: 100%;
  height: 0.1rem;
  margin: 0;
  border: none;
  background-color: ${({ theme }) => theme.colors.grey_200};
`;
