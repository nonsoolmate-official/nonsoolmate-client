import { MonthlyMembershipIc, SixMonthsMembershipIc } from "@assets/index";
import styled from "styled-components";

interface IconsProp {
  id: number;
}

export default function Icons(props: IconsProp) {
  const { id } = props;

  return <>{id === 1 ? <MonthlyMembershipIcon /> : <SixMonthsMembershipIcon />}</>;
}

const MonthlyMembershipIcon = styled(MonthlyMembershipIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
const SixMonthsMembershipIcon = styled(SixMonthsMembershipIc)`
  width: 4.4rem;
  height: 4.4rem;
`;
