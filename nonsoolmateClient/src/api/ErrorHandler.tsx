import { client } from "./axios";

export const ErrorHandler = ({ children }: { children: React.ReactNode }) => {
  // useEffect(() => {
  //   const token = getCookie("accessToken"); // 또는 인증 상태를 관리하는 방식에 따라 변경
  //   if (!token) {
  //     <Loading></Loading>; // 토큰이 없으면 로그인 페이지로 리다이렉트
  //   }
  // }, []);

  client.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (error.response.status === 403) {
        const originalRequest = error.config;
        return client(originalRequest);
      }
      return Promise.reject(error);
    },
  );

  return <>{children}</>;
};
