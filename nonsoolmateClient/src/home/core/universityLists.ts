export interface examListTypes {
  examId: number;
  examName: string;
  examTimeLimit: number;
  examResultStatus: string;
}

interface UniversityListsTypes {
  universityId: number;
  universityName: string;
  universityCategory: string;
  examList: examListTypes[];
}

export const universityLists: UniversityListsTypes[] = [
  {
    universityId: 2,
    universityName: "중앙대학교",
    universityCategory: "인문사회",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 5,
        examName: "2023 인문사회 5",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 6,
        examName: "2023 인문사회 6",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 1,
    universityName: "한양대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 3,
    universityName: "성균관대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 5,
        examName: "2023 인문사회 5",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 6,
        examName: "2023 인문사회 6",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 4,
    universityName: "서강대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 6,
    universityName: "이화여자대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
  {
    universityId: 5,
    universityName: "논메대학교",
    universityCategory: "인문",
    examList: [
      {
        examId: 1,
        examName: "2023 인문사회 1",
        examTimeLimit: 60,
        examResultStatus: "첨삭 완료",
      },
      {
        examId: 2,
        examName: "2023 인문사회 2",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 3,
        examName: "2023 인문사회 3",
        examTimeLimit: 60,
        examResultStatus: "첨삭 진행 중",
      },
      {
        examId: 4,
        examName: "2023 인문사회 4",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 5,
        examName: "2023 인문사회 5",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
      {
        examId: 6,
        examName: "2023 인문사회 6",
        examTimeLimit: 60,
        examResultStatus: "열람권 사용 전",
      },
    ],
  },
];
