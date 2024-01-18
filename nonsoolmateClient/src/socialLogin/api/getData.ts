import { useQueryClient } from "react-query";

export function getData() {
  const queryClient = useQueryClient();

  console.log(queryClient.getQueriesData);
}
