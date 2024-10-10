import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../api/getSingleProduct";

const QUERY_KEY = {
  getSingleProduct: "getSingleProduct",
};
export default function useGetSingleProduct(id: number) {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getSingleProduct],
    queryFn: () => getSingleProduct(id),
  });

  return { data };
}
