import { Outlet } from "react-router-dom";
import useSetInterceptors from "socialLogin/hooks/useSetInterceptors";

export default function Interceptors() {
  useSetInterceptors();
  return <Outlet />;
}
