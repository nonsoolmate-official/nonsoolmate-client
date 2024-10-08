import { CoachMarkProps } from "@pages/takeTest/types/coachMarkProps";
import styled from "styled-components";
import CloseCoachMark from "./CloseCoachMark";
import QuitTestMark from "./QuitTestMark";
import TimerMark from "./TimerMark";

export default function CoachMark(props: CoachMarkProps) {
  const { toPrecautionModal } = props;
  return (
    <CoachMarkContainer>
      <TimerMark />
      <QuitTestMark />
      <CloseCoachMark toPrecautionModal={toPrecautionModal} />
    </CoachMarkContainer>
  );
}
const CoachMarkContainer = styled.section`
  ${({ theme }) => theme.effects.dimmed_60};

  position: fixed;
  color: ${({ theme }) => theme.colors.white};
  inset: 0;
`;
