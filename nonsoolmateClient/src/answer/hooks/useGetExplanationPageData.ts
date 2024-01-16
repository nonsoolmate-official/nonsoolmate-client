import { useQuery } from "react-query";
import { getExplanationPageData } from "answer/api/getExplanationPageData";

const QUERY_KEY = {
  getExplanationPageData: "getExplanationPageData",
};

export function useGetExplanationPageData(examId: number) {
  const { data } = useQuery([QUERY_KEY.getExplanationPageData, examId], () => getExplanationPageData(examId), {
    onError: (err) => {
      console.log(err);
    },
  });
  return data;
}
