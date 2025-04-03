import theme from "style/theme";
import styled from "styled-components";
import { Plan } from "types/productsListType";

interface OrderDetailProps {
  plan: Plan;
  count: number;
}

export default function OrderDetail({ plan, count }: OrderDetailProps) {
  return (
    <OrderDetailContainer>
      <Type>{plan.productName}</Type>
      <Price>{(plan.price * count).toLocaleString()}원</Price>
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
