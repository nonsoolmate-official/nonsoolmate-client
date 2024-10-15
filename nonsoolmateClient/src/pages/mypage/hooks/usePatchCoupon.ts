import { useMutation } from "@tanstack/react-query";
import { patchCoupon } from "../api/patchCoupon";

export default function usePatchCoupon() {
  const mutate = useMutation({
    mutationFn: (couponMemberId: number) => patchCoupon(couponMemberId),
  });

  return mutate;
}
