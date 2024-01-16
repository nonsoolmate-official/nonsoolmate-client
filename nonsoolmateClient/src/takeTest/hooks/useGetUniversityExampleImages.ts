import { useQuery } from "react-query";
import { getUniversityExamImages } from "takeTest/api/getUniversityExamImages";

const QUERY_KEY = {
  getUniversityExamImages: "getUniversityExamImages",
};

export function useGetUniversityExampleImages(examId: number, pageNum: number) {
  const { data } = useQuery(
    [QUERY_KEY.getUniversityExamImages, pageNum],
    () => getUniversityExamImages(examId, pageNum),
    {
      keepPreviousData: true,
      onError: (error) => {
        console.log("에러 발생", error);
      },
    },
  );
  return data;
}
