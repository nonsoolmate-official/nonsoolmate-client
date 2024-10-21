import { useQuery } from "@tanstack/react-query";
import { getRevisionResult } from "../api/getRevisionResult";

const QUERY_KEY = {
  getRevisionResult: "getRevisionResult",
};

export function useGetRevisionResult(examId: number, examStatus: string) {
  const { data, refetch } = useQuery({
    queryKey: [QUERY_KEY.getRevisionResult, examId],
    queryFn: () => getRevisionResult(examId),
    enabled: examStatus === "재첨삭 완료", // 재첨삭 완료일때만 통신
    refetchInterval: 3000, // 3초마다 데이터를 refetch
  });
  return { data, refetch };
}
