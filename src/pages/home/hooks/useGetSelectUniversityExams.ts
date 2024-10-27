import { useQuery } from "@tanstack/react-query";
import { getSelectUniversityExams } from "../api/getSelectUniversityExams";

export default function useGetSelectUniversityExams() {
  const { data, refetch } = useQuery({
    queryKey: ["getSelectUniversityExams"],
    queryFn: () => getSelectUniversityExams(),
    // refetchInterval: 3000, // 3초마다 데이터를 refetch
  });

  return { data, refetch };
}
