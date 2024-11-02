const COUPON_TYPE_RATE = "RATE";

export function checkCouponType(couponType: string, discountRate?: number, discountAmount?: number) {
  if (couponType === COUPON_TYPE_RATE && discountRate) {
    const calculateRate = discountRate * 100;
    return `${calculateRate}% OFF`;
  } else {
    return `${discountAmount}원 OFF`;
  }
}

export function convertDate(validEndDate: string) {
  const date = new Date(validEndDate);

  return date.toISOString().split("T")[0];
}

export function calcCouponDc(dcInfo: string, finalPrice_beforeCoupon: number) {
  const percentageDiscountRegex = /(\d+)% OFF/;
  const amountDiscountRegex = /(\d+)원 OFF/;
  if (dcInfo) {
    if (percentageDiscountRegex.test(dcInfo)) {
      const dicRate = parseFloat(dcInfo.match(percentageDiscountRegex)?.[1] || "0");
      return finalPrice_beforeCoupon * ((100 - dicRate) / 100);
    } else if (amountDiscountRegex.test(dcInfo)) {
      const dicAmount = parseFloat(dcInfo.match(amountDiscountRegex)?.[1] || "0");
      return finalPrice_beforeCoupon - dicAmount;
    }
  }

  return finalPrice_beforeCoupon;
}
