import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToken } from "socialLogin/utils/token";

export default function useRefreshPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/signup");
    }
  }, [navigate]);
}
