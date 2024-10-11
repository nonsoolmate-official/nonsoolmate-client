import styled from "styled-components";

import { EmptyCircleIc, FilledCircleIc } from "@assets/index";
import { checkCouponType, convertDate } from "@pages/payment/utils/coupon";
import { CouponListResponse, CouponsType } from "@pages/payment/api/getCoupon";

interface ListProps {
  couponExist?: boolean;
  activeCouponId: number | null;
  COUPON_LIST: CouponListResponse;
  handleCouponClick: (
    couponMemberId: number,
    couponName: string,
    couponType: string,
    discountRate?: number,
    discountAmount?: number,
  ) => void;
}

export default function CouponList(props: ListProps) {
  const { couponExist, activeCouponId, handleCouponClick, COUPON_LIST } = props;

  return (
    <CouponContainer>
      {couponExist ? (
        <CouponListBox>
          {COUPON_LIST.coupons.map((item: CouponsType) => {
            const { couponMemberId, couponName, couponType, discountRate, discountAmount, validEndDate, isUsed } = item;
            const isCouponClicked = activeCouponId === couponMemberId;
            if (!isUsed) {
              return (
                <Coupon
                  type="button"
                  key={couponMemberId}
                  $isCouponClicked={isCouponClicked}
                  onClick={() =>
                    handleCouponClick(couponMemberId, couponName, couponType, discountRate, discountAmount)
                  }>
                  {isCouponClicked ? <FilledCircleIcon /> : <EmptyCircleIcon />}
                  <CouponText>
                    <DiscountTxt>{checkCouponType(couponType, discountRate, discountAmount)}</DiscountTxt>
                    <CouponDetail>
                      <CouponName>{couponName} |</CouponName>
                      <CouponExpiration>유효기간 ~ {convertDate(validEndDate)}</CouponExpiration>
                    </CouponDetail>
                  </CouponText>
                </Coupon>
              );
            }
          })}
        </CouponListBox>
      ) : (
        <NoCouponTxt>사용 가능한 쿠폰이 없습니다.</NoCouponTxt>
      )}
    </CouponContainer>
  );
}

const CouponContainer = styled.div`
  display: flex;
`;

const CouponListBox = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  width: 100%;
  height: 17.6rem;
  padding: 0 0 1rem;
`;

const NoCouponTxt = styled.p`
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_500};
  ${({ theme }) => theme.fonts.Body6};
`;

const Coupon = styled.button<{ $isCouponClicked: boolean }>`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  width: 100%;
  height: 8.8rem;
  padding: 2rem 0;
  border-top: 1px solid ${({ theme }) => theme.colors.grey_100};
  cursor: pointer;
`;

const EmptyCircleIcon = styled(EmptyCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const FilledCircleIcon = styled(FilledCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const CouponText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  width: 100%;
`;

const DiscountTxt = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.Body5};
  ${({ theme }) => theme.colors.black};
`;

const CouponDetail = styled.div`
  display: flex;
  gap: 0.4rem;
  width: 100%;
`;

const CouponName = styled.p`
  text-align: left;
  ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body7};
`;

const CouponExpiration = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_500};
`;
