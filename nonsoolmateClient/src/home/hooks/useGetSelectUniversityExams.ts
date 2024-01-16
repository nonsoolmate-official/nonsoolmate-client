import { getSelectUniversityExams } from "home/api/getSelectUniversityExams";

import { useQuery } from "react-query";

const QUERY_KEY = {
  getSelectUniversityExams: "getSelectUniversityExams",
};

export default function useGetSelectUniversityExams() {
  const { data } = useQuery(QUERY_KEY.getSelectUniversityExams, () => getSelectUniversityExams(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
