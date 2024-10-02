import { useMutation } from "react-query";
import { putExamSheet } from "../api/putExamSheet";

export function usePutExamSheet() {
  return useMutation(putExamSheet, {
    onSuccess: () => {
      console.log("Upload successful");
    },
    onError: (error) => {
      console.log("Upload failed", error);
    },
  });
}
