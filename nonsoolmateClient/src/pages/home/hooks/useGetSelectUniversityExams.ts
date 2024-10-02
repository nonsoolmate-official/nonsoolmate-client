import { useQuery } from "react-query";
import { getSelectUniversityExams } from "../api/getSelectUniversityExams";

export default function useGetSelectUniversityExams() {
  const { data, refetch } = useQuery("getSelectUniversityExams", () => getSelectUniversityExams(), {
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return { data, refetch };
}
