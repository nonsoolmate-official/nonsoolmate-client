import { useMutation } from "@tanstack/react-query";
import { postCardRegister } from "../api/postCardRegister";

export function usePostCardRegister() {
  return useMutation({
    mutationFn: postCardRegister,
  });
}
