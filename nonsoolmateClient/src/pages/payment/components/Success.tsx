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
  const { mutate: updateCard } = usePutCardUpdate(navigate, id);
  const { mutate: postMutate } = usePostCardRegister(navigate, id);
  const { cardInfo, isLoading } = useGetCardInfo();

  useEffect(() => {
    if (!customerKey || !authKey) return;
    if (isLoading) return;

    if (cardInfo && cardInfo.cardId) {
      updateCard(authKey);
    } else {
      postMutate({ authKey: authKey });
    }
  }, [authKey, cardInfo, navigate, postMutate, id]);

  if (!authKey) {
    return <></>;
  }

  return (
    <>
      <Loading />
    </>
  );
}
