import { MainButtonStyle } from "style/commonStyle";

export default function SocialLogin() {
  const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&state=nonsool&redirect_uri=${import.meta.env.VITE_CALLBACK_URL}`;

  function loginHandler() {
    window.location.href = NAVER_AUTH_URL;
  }
  return (
    <>
      <MainButtonStyle onClick={loginHandler}>네이버로 로그인 하기</MainButtonStyle>
    </>
  );
}
