import { getRevisionResult } from "answer/api/getRevisionResult";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getRevisionResult: "getRevisionResult",
};

export function useGetRevisionResult(examId: number) {
  const { data, refetch } = useQuery([QUERY_KEY.getRevisionResult, examId], () => getRevisionResult(examId), {
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: (error) => {
      console.log("에러", error);
    },
  });
  return { data, refetch };
}
