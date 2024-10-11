import { DiscountHistoryItem } from "types/discountHistoryType";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function SalesContents(props: DiscountHistoryItem) {
  const { discountTitle, beforeDiscountPrice, discountRate } = props;

  return (
    <Container>
      <SaleTitle>{discountTitle}</SaleTitle>
      <BeforePrice> {beforeDiscountPrice.toLocaleString()}</BeforePrice>
      <SalePercent>{discountRate * 100}% OFF</SalePercent>
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
