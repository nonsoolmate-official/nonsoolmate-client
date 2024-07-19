import { Response } from "types/common";
import { client } from "@api/axios";

export interface SelectUniversityDataTypes {
  universityId: number;
  universityName: string;
  universityCollege: string;
  examList: SelectExamListDataTypes[];
}

export interface SelectExamListDataTypes {
  examId: number;
  examName: string;
  examTimeLimit: number;
  examStatus: string;
}

export async function getSelectUniversityExams() {
  const response = await client.get<Response<SelectUniversityDataTypes[]>>(`/select-university/exam`);
  const { data } = response?.data;
  
  return data;
}
