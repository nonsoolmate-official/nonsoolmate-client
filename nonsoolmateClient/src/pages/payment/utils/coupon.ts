const COUPON_TYPE_RATE = "RATE";

export function checkCouponType(couponType: string, discountRate?: number, discountAmount?: number) {
  if (couponType === COUPON_TYPE_RATE) {
    return `${discountRate}% 할인`;
  } else {
    return `${discountAmount}원 할인`;
  }
}

export function convertDate(validEndDate: string) {
  const date = new Date(validEndDate);

  return date.toISOString().split("T")[0];
}
