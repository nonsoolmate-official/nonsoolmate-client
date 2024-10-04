import { client } from "@api/axios";

export interface CorrectionResultDataTypes {
  editingType: string;
  examResultStatus: string;
  examResultFileUrl: string;
}

export async function getEditingResult(examId: number) {
  const { data } = await client.get<CorrectionResultDataTypes>(
    `/college/exam/${examId}/exam-record/result?type=EDITING`,
  );

  return data;
}
