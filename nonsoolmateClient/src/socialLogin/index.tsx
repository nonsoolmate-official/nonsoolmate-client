import Loading from "loading";
import usePostLogin from "./hooks/usePostLogin";

//네이버 REDIRECT URL로 이동했을 때의 REDIRECT PAGE
export default function RedirectPage() {
  usePostLogin();
  return <Loading />;
}
