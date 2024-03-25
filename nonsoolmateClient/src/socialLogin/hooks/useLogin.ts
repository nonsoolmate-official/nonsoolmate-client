import { setToken } from "@api/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { client } from "@api/axios";

export interface loginResProps {
  data: {
    code: number;
    message: string;
    data: {
      memberId: number;
      authType: string;
      memberName: string;
      accessToken: string;
      refreshToken: string;
    };
  };
}
export default function useLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const CODE = urlParams.get("code");
  console.log(CODE);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .post(
        `${import.meta.env.VITE_BASE_URL}/auth/social/login`,
        {
          platformType: "NAVER",
        },
        {
          headers: {
            "Content-Type": "application/json",
            "authorization-code": CODE,
          },
        },
      )
      .then((res: loginResProps) => {
        console.log("로그인 성공");
        console.log(res);
        setToken(res.data.data.accessToken);
        window.location.href = "/home/test";
      })
      .catch(() => {
        navigate("/error");
      });
  }, []);
}
