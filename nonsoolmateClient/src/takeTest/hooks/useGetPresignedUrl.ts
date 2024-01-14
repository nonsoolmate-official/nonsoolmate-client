import { useQuery } from "react-query";
import { getPresignedUrl } from "takeTest/api/getPresignedUrl";

const QUERY_KEY = {
  getPresignedUrl: "getPresignedUrl",
};

export default function useGetPresignedUrl() {
  const { data } = useQuery(QUERY_KEY.getPresignedUrl, () => getPresignedUrl(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
