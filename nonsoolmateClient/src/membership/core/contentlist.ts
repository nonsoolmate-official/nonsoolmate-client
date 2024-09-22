import { ContentListType } from "membership/types/contentlisttpye";

export const CONTENT_LIST: ContentListType[] = [
  {
    id: 1,
    title: "베이직",
    sales: [
      {
        saletitle: "얼리버드 특가",
        beforeprice: "210,000",
        salepercent: 20,
      },
      {
        saletitle: "첫 달 20%추가 할인",
        beforeprice: "168,000",
        salepercent: 20,
      },
    ],
    price: "134,400",
  },
  {
    id: 2,
    title: "프리미엄",
    sales: [
      {
        saletitle: "얼리버드 특가",
        beforeprice: "260,000",
        salepercent: 20,
      },
      {
        saletitle: "첫 달 20%추가 할인",
        beforeprice: "208,000",
        salepercent: 20,
      },
    ],
    price: "166,400",
  },
];
