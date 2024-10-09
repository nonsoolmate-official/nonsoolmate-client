import { postCoupon } from "@pages/payment/api/postCoupon";
import { useMutation } from "@tanstack/react-query";

export function usePostCoupon() {
  return useMutation({
    mutationFn: postCoupon,
    onSuccess: () => {
      console.log("쿠폰 등록 성공");
    },
    onError: (error) => {
      console.log("쿠폰 등록 실패", error);
    },
  });
}
