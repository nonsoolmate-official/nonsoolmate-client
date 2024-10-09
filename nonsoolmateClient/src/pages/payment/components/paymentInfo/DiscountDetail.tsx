import { DiscountHistoryItem } from "@pages/payment/types/discountHistoryType";
import theme from "style/theme";
import styled from "styled-components";

interface DiscountDetailProps {
  discountHistory: DiscountHistoryItem[];
}
export default function DiscountDetail(props: DiscountDetailProps) {
  const { discountHistory } = props;
  return (
    <>
      {discountHistory.map((item) => (
        <DiscountDetailContainer key={item.discount_id}>
          <Coupon>{item.discount_title}</Coupon>
          <DiscountPriceBox>
            <PrevPrice>{item.beforeDiscount_price.toLocaleString()}원</PrevPrice>
            <DiscountRate>{item.discount_rate}% OFF</DiscountRate>
          </DiscountPriceBox>
        </DiscountDetailContainer>
      ))}
    </>
  );
}

const DiscountDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.grey_700};
`;

const Coupon = styled.p`
  ${({ theme }) => theme.fonts.Body6}

  white-space: nowrap;
`;

const DiscountPriceBox = styled.div`
  ${({ theme }) => theme.fonts.Body8}

  display: flex;
  gap: 0.8rem;
  align-items: center;
  white-space: nowrap;
`;

const PrevPrice = styled.p`
  color: ${theme.colors.grey_500};
  text-decoration: line-through;
`;

const DiscountRate = styled.p`
  color: ${theme.colors.error};
`;
