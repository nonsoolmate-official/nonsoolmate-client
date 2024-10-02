import { useQuery } from "react-query";
import { getProfile } from "../api/getProfile";

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
