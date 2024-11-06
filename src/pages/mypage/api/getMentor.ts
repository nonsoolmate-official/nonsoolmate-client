import { client } from "@api/axios";

export interface MentorDataTypes {
  isMatched: boolean;
  teacherId: number;
  teacherName: string;
  gender: string;
  introduction: string;
  isCertified: boolean;
  qnaLink: string;
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
