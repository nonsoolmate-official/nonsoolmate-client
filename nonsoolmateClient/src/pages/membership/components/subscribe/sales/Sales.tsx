import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import Price from "../Price";
import SalesContents from "./SalesContents";
import { Discount } from "@pages/membership/api/getProductsList";

interface SalesProp {
  defaultDiscounts: Discount[];
  price: number;
}

export default function Sales(props: SalesProp) {
  const { defaultDiscounts, price } = props;
  return (
    <Container>
      {defaultDiscounts.map(({ discountId, discountName, discountRate }) => {
        return (
          <SalesContents
            key={discountId}
            discountId={discountId}
            discountName={discountName}
            discountRate={discountRate}
          />
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
  width: 25.6rem;
`;
