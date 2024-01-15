//네이버 소셜 로그인 인가 코드 받는 코드입니당~

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  import.meta.env.VITE_CLIENT_ID
}&state=${import.meta.env.VITE_NAVER_STATE}l&redirect_uri=${import.meta.env.VITE_CALLBACK_URL}`;
