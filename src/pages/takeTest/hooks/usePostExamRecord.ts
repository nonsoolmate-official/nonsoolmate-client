import { useMutation } from "@tanstack/react-query";
import { postExamRecord } from "../api/postExamRecord";
import { ErrorResponse, useNavigate } from "react-router-dom";

export function usePostExamRecord() {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: postExamRecord,
    onSuccess: () => {
      console.log("답안지 제출성공");
    },
    onError: (error: ErrorResponse) => {
      console.log("답안지 제출실패", error);

      // 재첨삭 : 멤버십 없는데 재첨삭 신청할 경우 -> 멤버십 에러
      // 재첨삭 : 멤버십은 있는데 재첨삭권이 없을 때 -> 재첨삭권 에러

      // 첨삭 : 첨삭권 없을 때 -> 첨삭권 에러 (멤버십 에러는 없음)

      if (error.status === 400) {
        navigate("/membership");
      }
    },
  });
}
