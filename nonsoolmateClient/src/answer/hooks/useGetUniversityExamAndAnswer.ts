import { getUniversityExamAndAnswer } from "answer/api/getUniversityExamAndAnswer";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getUniversityExamAndAnswer: "getUniversityExamAndAnswer",
};

export function useGetUniversityExamAndAnswer(examId: number) {
  const { data } = useQuery([QUERY_KEY.getUniversityExamAndAnswer, examId], () => getUniversityExamAndAnswer(examId), {
    onError: (err) => {
      console.log(err);
    },
  });
  return data;
}
