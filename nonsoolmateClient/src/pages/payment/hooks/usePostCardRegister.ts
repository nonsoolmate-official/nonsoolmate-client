import { useMutation } from "@tanstack/react-query";
import { postCardRegister } from "../api/postCardRegister";
import { NavigateFunction } from "react-router-dom";

export function usePostCardRegister(navigate: NavigateFunction, id: string | null) {
  return useMutation({
    mutationFn: postCardRegister,
    onSuccess: () => {
      console.log("Card registration successful");
      navigate(`/payment`, { state: { id: Number(id) } });
    },
    onError: (error) => {
      console.log("Card registration failed", error);
    },
  });
}
