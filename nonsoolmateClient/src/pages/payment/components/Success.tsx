import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { usePostCardRegister } from "../hooks/usePostCardRegister";
import Loading from "@pages/loading";
import useGetCardInfo from "../hooks/useGetCardInfo";
import { usePutCardUpdate } from "../hooks/usePutCardUpdate";

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const customerKey = searchParams.get("customerKey");
  const authKey = searchParams.get("authKey");
  const id = searchParams.get("id");
  const { mutate: updateCard } = usePutCardUpdate();
  const { mutate: postMutate } = usePostCardRegister();
  const { cardInfo, isLoading } = useGetCardInfo();

  useEffect(() => {
    if (!customerKey || !authKey) return;

    if (isLoading) return;

    console.log(cardInfo);
    if (cardInfo && cardInfo.cardId) {
      updateCard(authKey, {
        onSuccess: () => {
          console.log("카드 업데이트 성공");
          navigate(`/payment`, { state: { id: Number(id) } });
        },
        onError: (error) => {
          console.error("카드 업데이트 실패", error);
        },
      });
    } else {
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
    }
  }, [cardInfo, authKey, navigate, postMutate]);

  if (!authKey) {
    return <></>;
  }

  return (
    <>
      <Loading />
    </>
  );
}
