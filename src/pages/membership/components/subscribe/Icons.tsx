import { BasicPlanIc, PremiumPlanIc, IndividualEditingIc } from "@assets/index";
import styled from "styled-components";

interface IconsProp {
  id: number;
}

export default function Icons(props: IconsProp) {
  const { id } = props;

  return (
    <>{id === 1 ? <BasicPlanIcon /> : id === 2 ? <PremiumPlanIcon /> : id === 3 ? <IndividualEditingIcon /> : null}</>
  );
}

const BasicPlanIcon = styled(BasicPlanIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
const PremiumPlanIcon = styled(PremiumPlanIc)`
  width: 4.4rem;
  height: 4rem;
`;
const IndividualEditingIcon = styled(IndividualEditingIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
