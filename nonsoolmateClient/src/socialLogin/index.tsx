import useLogin from "./hooks/useLogin";

//네이버 REDIRECT URL로 이동했을 때의 REDIRECT PAGE
export default function RedirectPage() {
  useLogin();
  return <></>;
}
