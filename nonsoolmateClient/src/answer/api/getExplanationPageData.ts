import { client } from "@api/axios";
import { Response } from "types/common";

// interface CorrectionPageData {
//   universityExamName: string;
//   examQuestionList: [examImgUrl: string];
//   examAnswerUrl: string;
// }

interface ExplanationPageData {
  universityExamName: string;
  examQuestionList: Array<{
    examImgUrl: string;
  }>;
  examAnswerUrl: string;
}

export async function getExplanationPageData(examId: number) {
  const { data } = await client.get<Response<ExplanationPageData>>(`/university/exam/${examId}/answer`);

  return data;
}
