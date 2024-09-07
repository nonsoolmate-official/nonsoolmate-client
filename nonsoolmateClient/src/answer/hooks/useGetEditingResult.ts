import { useQuery } from "react-query";
import { getEditingResult } from "answer/api/getEditingResult";

const QUERY_KEY = {
  getEditingResult: "getEditingResult",
};

export function useGetEditingResult(examId: number) {
  const { data } = useQuery([QUERY_KEY.getEditingResult, examId], () => getEditingResult(examId), {
    onError: (err) => {
      console.log(err);
    },
  });
  return data;
}
