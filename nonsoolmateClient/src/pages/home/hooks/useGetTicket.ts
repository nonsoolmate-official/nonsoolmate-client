import { useQuery } from "react-query";
import { getTicket } from "../api/getTicket";

const QUERY_KEY = {
  getTicket: "getTicket",
};

export default function useGetTicket() {
  const { data } = useQuery(QUERY_KEY.getTicket, () => getTicket(), {
    onError: (error) => {
      console.log("에러 발생", error);
    },
  });
  return data;
}
