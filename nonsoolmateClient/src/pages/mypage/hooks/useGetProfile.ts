import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../api/getProfile";

const QUERY_KEY = {
  getProfile: "getProfile",
};

export default function useGetProfile() {
  return useQuery({
    queryKey: [QUERY_KEY.getProfile],
    queryFn: () => getProfile(),
  });
}
