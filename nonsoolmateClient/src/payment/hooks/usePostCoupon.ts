import { useMutation } from "react-query";
import { postCoupon } from "payment/api/postCoupon";

export function usePostCoupon() {
  return useMutation(postCoupon, {
    onSuccess: () => {
      console.log("쿠폰 등록 성공");
    },
    onError: (error) => {
      console.log("쿠폰 등록 실패", error);
    },
  });
}
