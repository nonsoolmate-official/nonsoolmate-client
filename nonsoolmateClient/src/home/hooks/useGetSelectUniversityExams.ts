import { getSelectUniversityExams } from "home/api/getSelectUniversityExams";
import { useQuery } from "react-query";

export default function useGetSelectUniversityExams() {
  const { data, refetch } = useQuery("getSelectUniversityExams", () => getSelectUniversityExams(), {
    refetchInterval: 3000, // 3초마다 데이터를 refetch
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });

  return { data, refetch };
}
