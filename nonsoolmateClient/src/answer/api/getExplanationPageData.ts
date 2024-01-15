import { client } from "@api/axios";
import { Response } from "types/common";

interface ExplanationPageData {
  universityExamName: string;
  examQuestionList: TestImageType[];
  examAnswerUrl: string;
}

export interface TestImageType {
  examImgUrl: string;
}

export async function getExplanationPageData(examId: number) {
  const { data } = await client.get<Response<ExplanationPageData>>(`/university/exam/${examId}/answer`);

  return data;
}
