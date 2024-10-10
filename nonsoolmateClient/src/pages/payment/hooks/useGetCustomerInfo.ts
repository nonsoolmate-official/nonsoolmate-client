import { useQuery } from "@tanstack/react-query";
import { getCustomerInfo } from "../api/getCustomerInfo";

const QUERY_KEY = {
  getCustomerInfo: "getCustomerInfo",
};

export default function useGetCustomerInfo() {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.getCustomerInfo],
    queryFn: () => getCustomerInfo(),
  });

  return data;
}
