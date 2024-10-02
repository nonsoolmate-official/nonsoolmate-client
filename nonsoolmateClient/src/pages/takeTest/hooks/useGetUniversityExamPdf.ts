import { useQuery } from "react-query";
import { getUniversityExamPdf } from "../api/getUniversityExamPdf";

const QUERY_KEY = {
  getUniversityExamPdf: "getUniversityExamPdf",
};

export function useGetUniversityExamPdf(examId: number) {
  const { data } = useQuery([QUERY_KEY.getUniversityExamPdf], () => getUniversityExamPdf(examId), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
