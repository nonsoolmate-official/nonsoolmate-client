import { useQuery } from "@tanstack/react-query";
import { getSelectUniversities } from "../api/getSelectUniversities";

const QUERY_KEY = {
  getSelectUniversities: "getSelectUniversities",
};

export default function useGetSelectUniversities() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getSelectUniversities],
    queryFn: () => getSelectUniversities(),
  });
  return data;
}
