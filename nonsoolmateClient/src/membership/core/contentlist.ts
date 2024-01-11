import { ContentListType } from "membership/types/contentlisttpye";

export const CONTENT_LIST: ContentListType[] = [
  {
    id: 1,
    title: "월 정기구독",
    summary: "단기간 동안 논술 전형을 준비하는",
    sales: [
      {
        saletitle: "얼리버드 특가",
        beforeprice: 210000,
        salepercent: 25,
      },
      {
        saletitle: "첫 달 20%추가 할인",
        beforeprice: 157500,
        salepercent: 20,
      },
    ],
    price: 126000,
  },
  {
    id: 2,
    title: "6개월 패키지",
    summary: "체계적으로 논술입시를 준비하는",
    sales: [
      {
        saletitle: "패키지 할인",
        beforeprice: 1260000,
        salepercent: 40,
      },
    ],
    price: 126000,
  },
];
