//인가코드를 받기 위한 Naver url
export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${
  import.meta.env.VITE_CLIENT_ID
}&state=${import.meta.env.VITE_NAVER_STATE}&redirect_uri=${import.meta.env.VITE_CALLBACK_URL}`;
