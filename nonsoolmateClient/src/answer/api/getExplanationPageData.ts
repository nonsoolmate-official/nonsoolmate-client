import { client } from "@api/axios";
import { testImageType } from "answer/types/testImageType";
import { Response } from "types/common";

interface ExplanationPageData {
  universityExamName: string;
  examQuestionList: testImageType[];
  examAnswerUrl: string;
}

export async function getExplanationPageData(examId: number) {
  const { data } = await client.get<Response<ExplanationPageData>>(`/university/exam/${examId}/answer`);

  return data;
}
