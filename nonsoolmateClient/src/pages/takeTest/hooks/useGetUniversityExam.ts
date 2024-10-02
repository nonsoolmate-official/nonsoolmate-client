import { useQuery } from "@tanstack/react-query";
import { getUniversityExam } from "../api/getUniversityExam";

const QUERY_KEY = {
  getUniversityExam: "getUniversityExam",
};

export function useGetUniversityExam(id: number) {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getUniversityExam, id],
    queryFn: () => getUniversityExam(id),
  });
  return data;
}
