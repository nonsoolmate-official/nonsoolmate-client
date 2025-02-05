import styled from "styled-components";
import Plan from "./Plan";
import { Plan as PlanType } from "types/productsListType";

interface OrderInfoProps {
  id: number;
  selectedPlan: number;
  onPlanChange: (newPlanId: number) => void;
}

export default function OrderInfo(props: OrderInfoProps) {
  const { id, selectedPlan, onPlanChange } = props;
  const storedPlan = sessionStorage.getItem("plan");
  let parsedPlan: PlanType[] | null = null;

  if (storedPlan) {
    parsedPlan = JSON.parse(storedPlan);
  }

  return (
    <OrderInfoContainer>
      <OrderInfoTitle>주문 정보</OrderInfoTitle>
      <PlanContainer>
        {parsedPlan && id === 1
          ? parsedPlan.map(({ productId, productName, productDescriptions }) => (
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
          : parsedPlan &&
            parsedPlan
              .filter((item) => item.productId === id)
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
