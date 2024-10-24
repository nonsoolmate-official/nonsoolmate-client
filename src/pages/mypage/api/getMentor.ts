import { client } from "@api/axios";

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
  const { data } = await client.get<MentorDataTypes>("/my/teacher");

  return data;
}
