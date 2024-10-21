import { useQuery } from "@tanstack/react-query";
import { getEditingResult } from "../api/getEditingResult";

const QUERY_KEY = {
  getEditingResult: "getEditingResult",
};

export function useGetEditingResult(examId: number) {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getEditingResult, examId],
    queryFn: () => getEditingResult(examId),
  });
  return data;
}
