import { useMutation } from "@tanstack/react-query";
import { putCardUpdate } from "../api/putCardUpdate";
import { NavigateFunction } from "react-router-dom";

export function usePutCardUpdate(navigate: NavigateFunction, id: string | null) {
  return useMutation({
    mutationFn: putCardUpdate,
    onSuccess: () => {
      console.log("Card update successful");
      navigate(`/payment`, { state: { id: Number(id) } });
    },
    onError: (error) => {
      console.log("Card update failed", error);
    },
  });
}
