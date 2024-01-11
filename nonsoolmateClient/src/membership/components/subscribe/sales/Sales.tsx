import { SalesType } from "membership/types/salestype";
import SalesContents from "./SalesContents";

interface SalesProp {
  sales: SalesType[];
}

export default function Sales(props: SalesProp) {
  const { sales } = props;

  return (
    <>
      {sales.map((sale) => {
        const { saletitle, beforeprice, salepercent } = sale;
        return (
          <SalesContents key={saletitle} saletitle={saletitle} beforeprice={beforeprice} salepercent={salepercent} />
        );
      })}
    </>
  );
}
