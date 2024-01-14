interface SelectionListsTypes {
  universityId: number;
  universityName: string;
  universityCollege: string;
  memberStatus: boolean;
}

export const selectionLists: SelectionListsTypes[] = [
  {
    universityId: 2,
    universityName: "중앙대학교",
    universityCollege: "인문사회",
    memberStatus: true,
  },
  {
    universityId: 1,
    universityName: "한양대학교",
    universityCollege: "인문",
    memberStatus: true,
  },
  {
    universityId: 3,
    universityName: "성균관대학교",
    universityCollege: "사회",
    memberStatus: true,
  },
  {
    universityId: 4,
    universityName: "서강대학교",
    universityCollege: "인문",
    memberStatus: true,
  },
  {
    universityId: 6,
    universityName: "이화여자대학교",
    universityCollege: "사회",
    memberStatus: true,
  },
  {
    universityId: 5,
    universityName: "논메대학교",
    universityCollege: "인문사회",
    memberStatus: true,
  },
];
