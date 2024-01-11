import { useQuery } from "react-query";
import { getUniversityExamImages } from "takeTest/api/getUniversityExamImages";

export function useGetUniversityExampleImages(pageNum: number) {
  const result = useQuery(["pages", pageNum], () => getUniversityExamImages(pageNum), {
    keepPreviousData: true,
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return result;
}
