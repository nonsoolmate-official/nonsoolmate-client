import { useMutation } from "@tanstack/react-query";
import { putCardUpdate } from "../api/putCardUpdate";

export function usePutCardUpdate() {
  return useMutation({
    mutationFn: putCardUpdate,
    onSuccess: () => {
      console.log("Card update successful");
    },
    onError: (error) => {
      console.log("Card update failed", error);
    },
  });
}
