import { useMutation } from "@tanstack/react-query";
import { postMembership } from "../api/postMembership";

export function usePostMembership() {
  return useMutation({
    mutationFn: postMembership,
    onSuccess: () => {
      console.log("결제 성공");
    },
    onError: (error) => {
      console.log("결제 실패", error);
    },
  });
}
