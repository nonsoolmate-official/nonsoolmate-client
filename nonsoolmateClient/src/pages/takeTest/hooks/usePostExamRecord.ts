import { useMutation } from "@tanstack/react-query";
import { postExamRecord } from "../api/postExamRecord";

export function usePostExamRecord() {
  return useMutation({
    mutationFn: postExamRecord,
    onSuccess: () => {
      console.log("Upload successful");
    },
    onError: (error) => {
      console.log("Upload failed", error);
    },
  });
}
