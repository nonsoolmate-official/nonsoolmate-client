import axios from "axios";
import { getCookie } from "@api/cookie";

//재발급을 위한 mutationFn입니다.
export async function reissue() {
  const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/reissue`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("accessToken")}`,
      "Authorization-refresh": ``,
    },
  });

  return response?.data?.data;
}
