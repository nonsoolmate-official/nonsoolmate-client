import { getRevisionResult } from "answer/api/getRevisionResult";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getRevisionResult: "getRevisionResult",
};

export function useGetRevisionResult(examId: number, examStatus: string) {
  const { data, refetch } = useQuery([QUERY_KEY.getRevisionResult, examId], () => getRevisionResult(examId), {
    enabled: examStatus != "첨삭 완료", // 첨삭 완료는 404에러이기 때문에 아닐때만 통신
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: (error) => {
      console.log("에러", error);
    },
  });
  return { data, refetch };
}
