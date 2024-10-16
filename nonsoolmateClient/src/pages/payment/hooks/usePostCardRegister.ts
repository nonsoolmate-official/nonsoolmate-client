import { useMutation } from "@tanstack/react-query";
import { postCardRegister } from "../api/postCardRegister";
import { NavigateFunction } from "react-router-dom";

export function usePostCardRegister(navigate: NavigateFunction, id: string | null, from: string | null) {
  return useMutation({
    mutationFn: postCardRegister,
    onSuccess: () => {
      if (from === "/payment" && id) {
        navigate(`/payment`, { state: { id: Number(id) } });
      } else if (from === "/mypage") {
        navigate(`/mypage`, { state: { menu: "멤버십 관리" } });
      }
    },
    onError: (error) => {
      console.log("Card registration failed", error);
    },
  });
}
