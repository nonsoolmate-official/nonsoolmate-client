import { useMutation } from "@tanstack/react-query";
import { putExamSheet } from "../api/putExamSheet";

export function usePutExamSheet() {
  return useMutation({
    mutationFn: putExamSheet,
    onSuccess: () => {
      console.log("Upload successful");
    },
    onError: (error) => {
      console.log("Upload failed", error);
    },
  });
}
