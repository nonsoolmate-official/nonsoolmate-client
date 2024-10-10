import { useQuery } from "@tanstack/react-query";
import { getProductsList } from "../api/getProductsList";

const QUERY_KEY = {
  getProductsList: "getProductsList",
};

export default function useGetProductsList() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getProductsList],
    queryFn: () => getProductsList(),
  });
  return { data };
}
