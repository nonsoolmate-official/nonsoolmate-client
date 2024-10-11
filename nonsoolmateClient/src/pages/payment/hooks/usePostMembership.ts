import { useMutation } from "@tanstack/react-query";
import { postMembership } from "../api/postMembership";
import { ErrorResponse } from "react-router-dom";

export function usePostMembership(
  changeSuccessModalStatus: (open: boolean) => void,
  showNotRegisterError: (open: boolean) => void,
  showAlreadyPaidError: (open: boolean) => void,
) {
  return useMutation({
    mutationFn: postMembership,
    onSuccess: () => {
      console.log("결제 성공");
      changeSuccessModalStatus(true);
    },
    onError: (error: ErrorResponse) => {
      console.log("결제 실패", error);

      // 카드 등록을 하지 않고 결제를 진행한 경우
      if (error.status === 404) {
        showNotRegisterError(true);
        showAlreadyPaidError(false);
      }
      // 이미 멤버십 결제를 진행한 경우
      if (error.status === 400) {
        showAlreadyPaidError(true);
        showNotRegisterError(false);
      }
    },
  });
}
