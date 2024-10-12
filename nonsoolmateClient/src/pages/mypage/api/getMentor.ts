import { client } from "@api/axios";
import { Response } from "types/common";

export interface MentorDataTypes {
  isMatched: boolean;
  teacherId: number;
  teacherName: string;
  teacherProfileImageUrl: string;
  introduction: string;
  teacherUniversities: [
    {
      universityName: string;
      universityImageUrl: string;
    },
  ];
  tags: [
    {
      tagId: number;
      tagName: string;
      tagImageUrl: string;
    },
  ];
}

export async function getMentor() {
  const { data } = await client.get<Response<MentorDataTypes>>("/my/teacher");

  console.log(data);
  return data;
}
