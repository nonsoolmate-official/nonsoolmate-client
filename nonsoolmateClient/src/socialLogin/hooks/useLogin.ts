import { client } from "@api/axios";
import { useNavigate } from "react-router-dom";
import { loginErrorProps, loginResProps } from "./type";
import { useEffect } from "react";

//login을 위한 useMutation customhook입니다.
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
        // window.location.href = "/home/test";
      })
      .catch((err: loginErrorProps) => {
        if (err.response.data.code === 404) {
          navigate("/signup");
        } else {
          navigate("/error");
        }
      });
  }, []);
}
