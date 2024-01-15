import { getSelectUniversityExams } from "home/api/getSelectUniversityExams";

import { useQuery } from "react-query";

export default function useGetSelectUniversityExams() {
  const { data } = useQuery("getSelectUniversityExams", () => getSelectUniversityExams(), {
    onSuccess: (data) => {
      console.log("불러와라뿅", data);
    },
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
