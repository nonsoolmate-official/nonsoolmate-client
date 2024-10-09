import { client } from "@api/axios";

export async function postCoupon({ couponNumber }: { couponNumber: string }) {
  const { data } = await client.post(`/coupon`, {
    couponNumber: couponNumber,
  });

  return data;
}
