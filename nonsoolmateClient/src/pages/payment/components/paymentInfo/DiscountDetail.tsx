import { DiscountHistoryItem } from "types/discountHistoryType";
import theme from "style/theme";
import styled from "styled-components";

interface DiscountDetailProps {
  discountHistory: DiscountHistoryItem[];
  dcInfo: string;
  finalPrice_beforeCoupon: number;
}
export default function DiscountDetail(props: DiscountDetailProps) {
  const { discountHistory, dcInfo, finalPrice_beforeCoupon } = props;

  return (
    <>
      {discountHistory.map((item) => (
        <DiscountDetailContainer key={item.discountId}>
          <Coupon>{item.discountTitle}</Coupon>
          <DiscountPriceBox>
            <PrevPrice>{item.beforeDiscountPrice.toLocaleString()}원</PrevPrice>
            <DiscountRate>{item.discountRate * 100}% OFF</DiscountRate>
          </DiscountPriceBox>
        </DiscountDetailContainer>
      ))}
      {dcInfo && (
        <DiscountDetailContainer key={`${dcInfo}`}>
          <Coupon>쿠폰 할인</Coupon>
          <DiscountPriceBox>
            <PrevPrice>{finalPrice_beforeCoupon}원</PrevPrice>
            <DiscountRate>{dcInfo}</DiscountRate>
          </DiscountPriceBox>
        </DiscountDetailContainer>
      )}
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
