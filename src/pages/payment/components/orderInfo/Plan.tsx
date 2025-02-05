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
  onPlanChange?: (newPlanId: number) => void;
}

export default function Plan(props: PlanProps) {
  const { id, title, description, checkBox, selectedPlan, onPlanChange } = props;

  function handleClick() {
    if (onPlanChange) {
      onPlanChange(id);
    }
  }

  return (
    <PlanBox onClick={handleClick}>
      <PlanTitleBox>
        <PlanTitle>
          <PlanIcons id={id} width="2.2rem" height="2.2rem" />
          <PlanTitleText>{title}</PlanTitleText>
          {id === 1 ? (
            <></>
          ) : (
            <PlanMerit>
              <PlanMeritText>최고 혜택</PlanMeritText>
            </PlanMerit>
          )}
        </PlanTitle>
        <CheckIconBox $checkBox={checkBox}>{selectedPlan === id ? <CheckBtnIc /> : <CheckEmptyIc />}</CheckIconBox>
      </PlanTitleBox>
      <PlanDescription> {description.join(", ")}</PlanDescription>
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

const PlanDescription = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${theme.colors.grey_800};
`;
