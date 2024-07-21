import styled from "styled-components";
import TimerMark from "./TimerMark";
import QuitTestMark from "./QuitTestMark";
import CloseCoachMark from "./CloseCoachMark";
import { CoachMarkProps } from "takeTest/types/coachMarkProps";

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
