import { useQuery } from "react-query";
import { getUniversityExamImages } from "takeTest/api/getUniversityExamImages";

const QUERY_KEY = {
  getUniversityExamImages: "getUniversityExamImages",
};

export function useGetUniversityExampleImages(pageNum: number) {
  const { data } = useQuery([QUERY_KEY.getUniversityExamImages, pageNum], () => getUniversityExamImages(pageNum), {
    keepPreviousData: true,
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
