import { useMutation } from "react-query";
import { postExamRecord } from "takeTest/api/postExamRecord";

export function usePostExamRecord() {
  return useMutation(postExamRecord, {
    onSuccess: () => {
      console.log("Upload successful");
    },
    onError: (error) => {
      console.log("Upload failed", error);
    },
  });
}
