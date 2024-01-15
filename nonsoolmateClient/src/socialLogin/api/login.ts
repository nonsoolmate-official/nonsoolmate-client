import axios from "axios";

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
