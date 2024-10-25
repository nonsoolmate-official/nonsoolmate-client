import { client } from "@api/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setRefreshToken, setToken } from "../utils/token";

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
export default function usePostLogin() {
  const urlParams = new URLSearchParams(window.location.search);
  const CODE = urlParams.get("code");
  const navigate = useNavigate();
  const from = sessionStorage.getItem("from") || "/home/test";
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
        const { accessToken, refreshToken } = res.data.data;
        setToken(accessToken);
        setRefreshToken(refreshToken);

        if (from === "/membership") {
          window.location.href = "/membership";
        } else {
          window.location.href = "/home/test";
        }
      })
      .catch(() => {
        navigate("/error");
      });
  }, []);
}
