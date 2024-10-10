import styled from "styled-components";
import Plan from "./Plan";
import { Plan as PlanType } from "types/productsListType";

interface OrderInfoProps {
  id: number;
  plan: PlanType[];
  selectedPlan: number;
  onPlanChange: (newPlanId: number) => void;
}

export default function OrderInfo(props: OrderInfoProps) {
  const { id, plan, selectedPlan, onPlanChange } = props;

  return (
    <OrderInfoContainer>
      <OrderInfoTitle>주문 정보</OrderInfoTitle>
      <PlanContainer>
        {id === 1
          ? plan.map(({ productId, productName, productDescriptions }) => (
              <Plan
                id={productId}
                key={productId}
                title={productName}
                description={productDescriptions}
                checkBox={true}
                selectedPlan={selectedPlan}
                onPlanChange={onPlanChange}
              />
            ))
          : plan
              .filter((item) => item.productId === 2)
              .map(({ productId, productName, productDescriptions }) => (
                <Plan
                  id={productId}
                  key={productId}
                  title={productName}
                  description={productDescriptions}
                  checkBox={false}
                />
              ))}
      </PlanContainer>
    </OrderInfoContainer>
  );
}

const OrderInfoContainer = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
  margin-top: 0.4rem;
`;

const OrderInfoTitle = styled.h1`
  ${({ theme }) => theme.fonts.Body1}
`;

const PlanContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  cursor: pointer;
`;
