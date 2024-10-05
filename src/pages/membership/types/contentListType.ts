import { SalesType } from "./salesType";

export interface ContentListType {
  id: number;
  title: string;
  sales: SalesType[];
  price: string;
}
