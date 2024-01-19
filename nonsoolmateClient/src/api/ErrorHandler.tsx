import { useEffect } from "react";
import Loading from "loading";
import { getCookie } from "./cookie";

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const token = getCookie("accessToken"); // 또는 인증 상태를 관리하는 방식에 따라 변경
    if (!token) {
      <Loading></Loading>; // 토큰이 없으면 로그인 페이지로 리다이렉트
    }
  }, []);

  return <>{children}</>;
};
