import { OrderProps } from "@pages/payment/types/paymentInfoType";
import theme from "style/theme";
import styled from "styled-components";

export default function DiscountDetail(props: OrderProps) {
  const { plan } = props;
  return (
    <>
      {plan?.defaultDiscount.map((discount) => (
        <DiscountDetailContainer key={discount.id}>
          <Coupon>{discount.title}</Coupon>
          <DiscountPriceBox>
            <PrevPrice>{plan?.price.toLocaleString()}원</PrevPrice>
            <DiscountRate>{discount.rate}% OFF</DiscountRate>
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
