import { useQuery } from "@tanstack/react-query";
import { getUniversityExamPdf } from "../api/getUniversityExamPdf";

const QUERY_KEY = {
  getUniversityExamPdf: "getUniversityExamPdf",
};

export function useGetUniversityExamPdf(examId: number) {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getUniversityExamPdf],
    queryFn: () => getUniversityExamPdf(examId),
  });
  return data;
}
