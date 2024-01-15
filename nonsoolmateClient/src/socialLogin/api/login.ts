import axios from "axios";

//로그인을 위한 mutationFn입니다.
export async function login(code: string) {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/social/login`,
    {
      platformType: "NAVER",
    },
    {
      headers: {
        "Content-Type": "application/json",
        "authorization-code": code,
      },
    },
  );

  return response?.data?.data;
}
