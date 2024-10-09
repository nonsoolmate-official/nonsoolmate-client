import { client } from "@api/axios";

export interface CouponsType {
  couponMemberId: number;
  couponName: string;
  couponDescription: string;
  couponImageUrl: string;
  couponType: string;
  discountRate: number;
  discountAmount: number;
  ticketCount: number;
  validStartDate: string;
  validEndDate: string;
  isUsed: boolean;
}

export interface CouponListResponse {
  coupons: CouponsType[];
}

export async function getCoupon() {
  const { data } = await client.get<CouponListResponse>(`/coupon`);
  return data;
}
