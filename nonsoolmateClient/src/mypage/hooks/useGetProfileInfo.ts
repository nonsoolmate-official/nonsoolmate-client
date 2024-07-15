import { getProfileInfo } from "mypage/api/getProfileInfo";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getProfileInfo: "getProfileInfo",
};
export default function useGetProfileInfo() {
  const { data } = useQuery([QUERY_KEY.getProfileInfo], () => getProfileInfo(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
