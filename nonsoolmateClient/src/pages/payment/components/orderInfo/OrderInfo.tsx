import styled from "styled-components";
import Plan from "./Plan";
import { PLAN_LIST } from "../../core/planList";

interface OrderInfoProps {
  id: number;
  selectedPlan: number;
  onPlanChange: (newPlanId: number) => void;
}

export default function OrderInfo(props: OrderInfoProps) {
  const { id, selectedPlan, onPlanChange } = props;

  return (
    <OrderInfoContainer>
      <OrderInfoTitle>주문 정보</OrderInfoTitle>
      <PlanContainer>
        {id === 1
          ? PLAN_LIST.map((item) => (
              <Plan
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                checkBox={true}
                selectedPlan={selectedPlan}
                onPlanChange={onPlanChange}
              />
            ))
          : PLAN_LIST.filter((item) => item.id === 2).map((item) => (
              <Plan id={item.id} key={item.id} title={item.title} description={item.description} checkBox={false} />
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

const OrderInfoTitle = styled.p`
  ${({ theme }) => theme.fonts.Body1}
`;

const PlanContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  cursor: pointer;
`;
