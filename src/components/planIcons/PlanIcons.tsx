import { BasicPlanIc, PremiumPlanIc, IndividualEditingIc } from "@assets/index";
import styled from "styled-components";

interface IconsProp {
  id: number;
  width: string;
  height: string;
}

export default function PlanIcons(props: IconsProp) {
  const { id, width, height } = props;

  return (
    <>
      {id === 1 ? (
        <BasicPlanIcon width={width} height={height} />
      ) : id === 2 ? (
        <PremiumPlanIcon width={width} height={height} />
      ) : id === 3 ? (
        <IndividualEditingIcon width={width} height={height} />
      ) : null}
    </>
  );
}

const BasicPlanIcon = styled(BasicPlanIc)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const PremiumPlanIcon = styled(PremiumPlanIc)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
const IndividualEditingIcon = styled(IndividualEditingIc)<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;
