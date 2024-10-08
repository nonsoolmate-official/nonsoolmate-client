import { useQuery } from "@tanstack/react-query";
import { getUniversityExamAndAnswer } from "../api/getUniversityExamAndAnswer";

const QUERY_KEY = {
  getUniversityExamAndAnswer: "getUniversityExamAndAnswer",
};

export function useGetUniversityExamAndAnswer(examId: number) {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getUniversityExamAndAnswer, examId],
    queryFn: () => getUniversityExamAndAnswer(examId),
  });
  return data;
}
