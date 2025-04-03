import { CheckBtnIc, CheckEmptyIc } from "@assets/index";
import PlanIcons from "@components/planIcons/PlanIcons";
import theme from "style/theme";
import styled from "styled-components";

interface PlanProps {
  id: number;
  title: string;
  description: string[];
  checkBox: boolean;
  selectedPlan?: number;
  count?: number;
  onPlanChange?: (newPlanId: number) => void;
  changeCount?: (newCount: number) => void;
}

export default function Plan(props: PlanProps) {
  const { id, title, description, checkBox, selectedPlan, count, onPlanChange, changeCount } = props;

  function handleClick() {
    if (onPlanChange) {
      onPlanChange(id);
    }
  }

  function plusCount() {
    if (changeCount && count !== undefined) {
      changeCount(count + 1);
    }
  }

  function minusCount() {
    if (changeCount && count && count !== 1) {
      changeCount(count - 1);
    }
  }

  return (
    <PlanBox onClick={handleClick}>
      <PlanTitleBox>
        <PlanTitle>
          <PlanIcons id={id} width="2.2rem" height="2.2rem" />
          <PlanTitleText>{title}</PlanTitleText>
          {id === 2 ? (
            <PlanMerit>
              <PlanMeritText>최고 혜택</PlanMeritText>
            </PlanMerit>
          ) : (
            <></>
          )}
        </PlanTitle>
        <CheckIconBox $checkBox={checkBox}>{selectedPlan === id ? <CheckBtnIc /> : <CheckEmptyIc />}</CheckIconBox>
      </PlanTitleBox>
      {id === 3 ? (
        <>
          <DescriptionBox>
            <PlanDescription> {description.join(", ")}</PlanDescription>
            <ButtonBox>
              <QuantityChangeButton onClick={minusCount}>-</QuantityChangeButton>
              <ChangedQuantity>{count}</ChangedQuantity>
              <QuantityChangeButton onClick={plusCount}>+</QuantityChangeButton>
            </ButtonBox>
          </DescriptionBox>
          <QuantityInfo>수량 : {count}개</QuantityInfo>
        </>
      ) : (
        <PlanDescription> {description.join(", ")}</PlanDescription>
      )}
    </PlanBox>
  );
}
const PlanBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  padding: 1.6rem;
  border: 1px solid ${theme.colors.grey_200};
  border-radius: 8px;
`;

const PlanTitleBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PlanTitle = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

const PlanTitleText = styled.p`
  ${({ theme }) => theme.fonts.Body3}
`;

const PlanMerit = styled.div`
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  background-color: ${theme.colors.light_blue};
`;

const PlanMeritText = styled.p`
  ${({ theme }) => theme.fonts.Body7}

  color: ${theme.colors.main_blue};
`;

const CheckIconBox = styled.div<{ $checkBox: boolean }>`
  display: ${({ $checkBox }) => ($checkBox ? "block" : "none")};
  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6rem;
`;

const QuantityInfo = styled.p`
  ${({ theme }) => theme.fonts.Body7}

  color: ${theme.colors.grey_1000};
`;

const PlanDescription = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${theme.colors.grey_800};
`;

const ChangedQuantity = styled.p`
  align-content: center;
  width: 2.5rem;
  height: 2.5rem;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.Body7}

  width: fit-content;
  height: 2.5rem;
  border: 0.5px solid ${theme.colors.grey_300};
`;

const QuantityChangeButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${theme.colors.grey_200};
`;
