import { useQuery } from "react-query";
import { getCorrectionPageData } from "answer/api/getCorrectionPageData";

const QUERY_KEY = {
  getCorrectionPageData: "getCorrectionPageData",
};

export function useGetCorrectionPageData(id: number) {
  const { data } = useQuery([QUERY_KEY.getCorrectionPageData, id], () => getCorrectionPageData(id), {
    onError: (err) => {
      console.log(err);
    },
  });
  return data;
}
