import { SalesType } from "membership/types/salestype";
import SalesContents from "./SalesContents";
import styled from "styled-components";
import { columnFlex } from "style/commonStyle";
import Price from "../Price";

interface SalesProp {
  sales: SalesType[];
  price: number;
}

export default function Sales(props: SalesProp) {
  const { sales, price } = props;

  return (
    <Container>
      {sales.map((sale) => {
        const { saletitle, beforeprice, salepercent } = sale;
        return (
          <SalesContents key={saletitle} saletitle={saletitle} beforeprice={beforeprice} salepercent={salepercent} />
        );
      })}
      <Price price={price} />
    </Container>
  );
}

const Container = styled.div`
  ${columnFlex}
  gap: 0.3rem;
  align-items: flex-end;
`;
