import { getMembership } from "@pages/mypage/api/getMembership";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = {
  getMembership: "getMembership",
};

export default function useGetMembership() {
  return useQuery({
    queryKey: [QUERY_KEY.getMembership],
    queryFn: getMembership,
  });
}
