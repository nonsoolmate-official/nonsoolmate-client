import { client } from "@api/axios";

export async function patchCoupon(couponMemberId: number) {
  const data = await client.patch("/coupon", {
    couponMemberId: couponMemberId,
  });

  return data;
}
