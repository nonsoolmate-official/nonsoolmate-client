import { useQuery } from "@tanstack/react-query";
import { getTicket } from "../api/getTicket";

const QUERY_KEY = {
  getTicket: "getTicket",
};

export default function useGetTicket() {
  return useQuery({
    queryKey: [QUERY_KEY.getTicket],
    queryFn: () => getTicket(),
  });
}
