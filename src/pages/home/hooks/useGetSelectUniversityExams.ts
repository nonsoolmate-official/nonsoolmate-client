import { useQuery } from "@tanstack/react-query";
import { getSelectUniversityExams } from "../api/getSelectUniversityExams";

export default function useGetSelectUniversityExams() {
  const { data, refetch } = useQuery({
    queryKey: ["getSelectUniversityExams"],
    queryFn: () => getSelectUniversityExams(),
  });

  return { data, refetch };
}
