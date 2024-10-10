import { client } from "@api/axios";

interface PostMembershipTypes {
  productId: number;
  couponMemberId: number;
}

export async function postMembership(props: PostMembershipTypes) {
  const { productId, couponMemberId } = props;
  const { data } = await client.post("/payment/membership", {
    productId: productId,
    couponMemberId: couponMemberId,
  });

  return data;
}
