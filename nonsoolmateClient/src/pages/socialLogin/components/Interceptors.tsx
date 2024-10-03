import { Outlet } from "react-router-dom";
import useSetInterceptors from "../hooks/useSetInterceptors";

export default function Interceptors() {
  useSetInterceptors();
  return <Outlet />;
}
