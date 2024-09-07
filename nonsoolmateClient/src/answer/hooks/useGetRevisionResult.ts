import { getRevisionResult } from "answer/api/getRevisionResult";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getRevisionResult: "getRevisionResult",
};

export function useGetRevisionResult(examId: number) {
  const { data } = useQuery([QUERY_KEY.getRevisionResult, examId], () => getRevisionResult(examId), {
    onError: (err) => {
      console.log(err);
    },
  });
  return data;
}
