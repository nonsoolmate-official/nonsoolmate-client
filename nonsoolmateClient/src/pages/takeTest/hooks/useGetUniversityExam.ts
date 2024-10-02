import { useQuery } from "react-query";
import { getUniversityExam } from "../api/getUniversityExam";

const QUERY_KEY = {
  getUniversityExam: "getUniversityExam",
};

export function useGetUniversityExam(id: number) {
  const { data } = useQuery([QUERY_KEY.getUniversityExam, id], () => getUniversityExam(id), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
