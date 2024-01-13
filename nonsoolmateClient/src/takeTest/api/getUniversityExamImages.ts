import { client } from "@api/axios";
export async function getUniversityExamImages(pageNum: number) {
  const response = await client.get(`/university/exam/1/image?page=${pageNum}`);

  return response.data;
}
