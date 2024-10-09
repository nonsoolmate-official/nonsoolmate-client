import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePostCardRegister } from "../hooks/usePostCardRegister";
import Loading from "@pages/loading";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerKey = searchParams.get("customerKey");
  const authKey = searchParams.get("authKey");
  const id = searchParams.get("id");
  const { mutate: postMutate } = usePostCardRegister();

  useEffect(() => {
    if (!customerKey || !authKey) return;

    postMutate(
      { authKey: authKey },
      {
        onSuccess: () => {
          console.log("카드 등록 성공");
          navigate(`/payment`, { state: { id: Number(id) } });
        },
        onError: (error) => {
          console.error("카드 등록 실패", error);
        },
      },
    );
  }, [authKey, navigate, postMutate]);

  if (!authKey) {
    return <></>;
  }

  return (
    <>
      <Loading />
    </>
  );
}
