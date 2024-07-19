import { getProfile } from "mypage/api/getProfile";
import { useQuery } from "react-query";

const QUERY_KEY = {
  getProfile: "getProfile",
};
export default function useGetProfile() {
  const { data } = useQuery([QUERY_KEY.getProfile], () => getProfile(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
