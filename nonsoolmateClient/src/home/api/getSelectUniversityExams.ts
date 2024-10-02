import { Response } from "types/common";
import { client } from "@api/axios";

export interface SelectUniversityDataTypes {
  collegeId: number;
  universityName: string;
  collegeName: string;
  examList: SelectExamListDataTypes[];
}

export interface SelectExamListDataTypes {
  examId: number;
  examName: string;
  examTimeLimit: number;
  examStatus: string;
}

export async function getSelectUniversityExams() {
  const response = await client.get<Response<SelectUniversityDataTypes[]>>(`/select-college/exam`);
  const { data } = response?.data;

  return data;
}
