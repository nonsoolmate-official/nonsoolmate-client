import { useMutation } from "@tanstack/react-query";
import { putCardUpdate } from "../api/putCardUpdate";
import { NavigateFunction } from "react-router-dom";

export function usePutCardUpdate(navigate: NavigateFunction, id: string | null, from: string | null) {
  return useMutation({
    mutationFn: putCardUpdate,
    onSuccess: () => {
      if (from === "/payment" && id) {
        navigate(`/payment`, { state: { id: Number(id) } });
      } else if (from === "/mypage") {
        navigate(`/mypage`, { state: { menu: "멤버십 관리" } });
      }
    },
    onError: (error) => {
      console.log("Card update failed", error);
    },
  });
}
