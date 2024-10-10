import { Discount } from "@pages/membership/api/getProductsList";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function SalesContents(props: Discount) {
  const { discountName, discountRate } = props;

  return (
    <Container>
      <SaleTitle>{discountName}</SaleTitle>
      <BeforePrice> &#8361;100000</BeforePrice>
      <SalePercent>{discountRate}% OFF</SalePercent>
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}

  align-items: flex-end;
`;

const SaleTitle = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.grey_500};
`;

const BeforePrice = styled(SaleTitle)`
  margin-right: 0.4rem;
  margin-left: 1.2rem;
  text-decoration: line-through;
`;

const SalePercent = styled.p`
  ${({ theme }) => theme.fonts.Body8};

  color: ${({ theme }) => theme.colors.error};
`;
