import { OrderProps } from "@pages/payment/types/paymentInfoType";
import theme from "style/theme";
import styled from "styled-components";

export default function OrderDetail(props: OrderProps) {
  const { plan } = props;
  return (
    <OrderDetailContainer>
      <Type>{plan?.title}</Type>
      <Price>{plan?.price.toLocaleString()}원</Price>
    </OrderDetailContainer>
  );
}
const OrderDetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.colors.grey_700};
`;

const Type = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;

const Price = styled.p`
  ${({ theme }) => theme.fonts.Body6}
`;
