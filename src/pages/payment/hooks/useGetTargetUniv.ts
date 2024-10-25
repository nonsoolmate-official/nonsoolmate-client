import { useQuery } from "@tanstack/react-query";
import { getTargetUniv } from "../api/getTargetUniv";

const QUERY_KEY = {
  getTargetUniv: "getTargetUniv",
};

export default function useGetTargetUniv() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getTargetUniv],
    queryFn: () => getTargetUniv(),
  });

  return { data };
}
