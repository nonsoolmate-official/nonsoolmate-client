import { client } from "@api/axios";
import { isAxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { getRefreshToken, removeToken, setRefreshToken, setToken } from "../utils/token";

export default function usePostRefresh() {
  const navigate = useNavigate();

  const postRefresh = async () => {
    const refreshToken = getRefreshToken();

    try {
      const response = await client.post(
        "/auth/reissue",
        {},
        {
          headers: {
            "Authorization-refresh": `Bearer ${refreshToken}`,
          },
        },
      );

      const newToken = response.data.data;
      setToken(newToken.accessToken);
      setRefreshToken(newToken.refreshToken);
    } catch (err) {
      if (isAxiosError(err) && err.response?.status === 401) {
        removeToken();
        navigate("/signup");
      }
    }
  };

  return postRefresh;
}
