import styled from "styled-components";
import { PLAN_LIST } from "../../core/planList";
import Plan from "./Plan";

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
          ? PLAN_LIST.map(({ id, title, description }) => (
              <Plan
                id={id}
                key={id}
                title={title}
                description={description}
                checkBox={true}
                selectedPlan={selectedPlan}
                onPlanChange={onPlanChange}
              />
            ))
          : PLAN_LIST.filter((item) => item.id === 2).map(
              ({ id, title, description }) => (
                <Plan
                  id={id}
                  key={id}
                  title={title}
                  description={description}
                  checkBox={false}
                />
              )
            )}
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
