import { client } from "@api/axios";
export async function getUniversityExam(id: number) {
  const response = await client.get(`/university/exam/${id}/info`);

  return response.data;
}
