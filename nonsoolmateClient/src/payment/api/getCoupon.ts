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

interface Response {
  coupons: CouponsType[];
}

export async function getCoupon() {
  const { data } = await client.get<Response>(`/coupon`);
  return data;
}
