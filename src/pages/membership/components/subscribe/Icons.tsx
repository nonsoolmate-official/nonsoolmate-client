import { BasicPlanIc, PremiumPlanIc } from "@assets/index";
import styled from "styled-components";

interface IconsProp {
  id: number;
}

export default function Icons(props: IconsProp) {
  const { id } = props;

  return <>{id === 1 ? <BasicPlanIcon /> : <PremiumPlanIcon />}</>;
}

const BasicPlanIcon = styled(BasicPlanIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
const PremiumPlanIcon = styled(PremiumPlanIc)`
  width: 4.4rem;
  height: 4rem;
`;
