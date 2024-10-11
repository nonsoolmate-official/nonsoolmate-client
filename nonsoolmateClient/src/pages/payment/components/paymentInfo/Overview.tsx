import theme from "style/theme";
import styled from "styled-components";

interface OverviewProps {
  discountedPrice: number;
  finalPrice_afterCoupon: number;
}
export default function Overview(props: OverviewProps) {
  const { discountedPrice, finalPrice_afterCoupon } = props;
  return (
    <OverviewContainer>
      <DiscountOverview>
        <TotalDiscount>총 할인가</TotalDiscount>
        <Price>-{discountedPrice.toLocaleString()}원</Price>
      </DiscountOverview>
      <PaymentOverview>
        <TotalPayment>총 결제 금액</TotalPayment>
        <TotalPriceBox>
          <TotalPrice>{finalPrice_afterCoupon.toLocaleString()}원</TotalPrice>
          <Unit> / 월</Unit>
        </TotalPriceBox>
      </PaymentOverview>
    </OverviewContainer>
  );
}

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const DiscountOverview = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.grey_700};
`;

const PaymentOverview = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TotalDiscount = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const Price = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const TotalPayment = styled.p`
  ${({ theme }) => theme.fonts.Body1}

  white-space: nowrap;
`;

const TotalPriceBox = styled.div`
  display: flex;
  gap: 0;
  justify-content: flex-end;
  width: 16.1rem;
`;

const TotalPrice = styled.p`
  ${({ theme }) => theme.fonts.Body1}

  color: ${theme.colors.main_blue};
`;

const Unit = styled.p`
  ${({ theme }) => theme.fonts.Body2}

  margin-left: 0.6rem;
`;
