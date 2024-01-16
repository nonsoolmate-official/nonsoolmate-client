import { NAVER_AUTH_URL } from "socialLogin/api/getNaverAuthUrl";

// 네이버 인증 URL로 리디렉트하는 함수
export function redirectToNaverAuth() {
  window.location.href = NAVER_AUTH_URL; // 네이버 인증 페이지로 이동
}
