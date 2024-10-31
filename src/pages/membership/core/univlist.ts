import {
  Univ10Ic,
  Univ11Ic,
  Univ12Ic,
  Univ13Ic,
  Univ14Ic,
  Univ1Ic,
  Univ2Ic,
  Univ3Ic,
  Univ4Ic,
  Univ5Ic,
  Univ6Ic,
  Univ7Ic,
  Univ8Ic,
  Univ9Ic,
} from "@assets/index";

export interface UnivListTypes {
  id: number;
  univ: string;
  img: string;
  details?: string;
}

export const UNIV_LIST: UnivListTypes[] = [
  { id: 1, univ: "가천대", img: Univ1Ic },
  { id: 2, univ: "건국대", img: Univ2Ic },
  { id: 3, univ: "경희대", img: Univ3Ic },
  { id: 4, univ: "서강대", img: Univ4Ic },
  { id: 5, univ: "성균관대", img: Univ5Ic },
  { id: 6, univ: "중앙대", img: Univ6Ic },
  { id: 7, univ: "한국외대", img: Univ7Ic },
  { id: 8, univ: "세종대", img: Univ8Ic },
  { id: 9, univ: "이화여대", img: Univ9Ic },
  { id: 10, univ: "인하대", img: Univ10Ic },
  { id: 11, univ: "동국대", img: Univ11Ic },
  { id: 12, univ: "삼육대", img: Univ12Ic },
  { id: 13, univ: "수원대", img: Univ13Ic },
  { id: 14, univ: "한양대", img: Univ14Ic },
];
