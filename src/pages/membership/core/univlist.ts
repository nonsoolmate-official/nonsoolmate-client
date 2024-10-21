import { Univ1Ic, Univ2Ic, Univ3Ic, Univ4Ic, Univ5Ic, Univ6Ic, Univ7Ic, Univ8Ic, Univ9Ic } from "@assets/index";

export interface UnivListTypes {
  id: number;
  univ: string;
  img: string;
  details?: string;
}

export const UNIV_LIST: UnivListTypes[] = [
  { id: 1, univ: "가천대", img: Univ1Ic },
  { id: 2, univ: "건국대", img: Univ2Ic },
  { id: 3, univ: "고려대", img: Univ3Ic },
  { id: 4, univ: "경희대", details: "사회", img: Univ4Ic },
  { id: 5, univ: "경희대", details: "인문체육", img: Univ4Ic },
  { id: 6, univ: "서강대", img: Univ5Ic },
  { id: 7, univ: "성균관대", img: Univ6Ic },
  { id: 8, univ: "중앙대", img: Univ7Ic },
  { id: 9, univ: "한국외대", img: Univ8Ic },
  { id: 10, univ: "한양대", img: Univ9Ic },
];
