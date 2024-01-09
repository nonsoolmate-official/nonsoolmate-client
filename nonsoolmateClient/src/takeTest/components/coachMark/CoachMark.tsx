import styled from "styled-components";
import PrevPageMark from "./PrevPageMark";
import NextPageMark from "./NextPageMark";
import TimerMark from "./TimerMark";
import QuitTestMark from "./QuitTestMark";
import CloseCoachMark from "./CloseCoachMark";
import { CoachMarkProps } from "takeTest/types/\bcoachMarkProps";

export default function CoachMark(props: CoachMarkProps) {
  const { changeStatus } = props;
  return (
    <CoachMarkContainer>
      <PrevPageMark />
      <NextPageMark />
      <TimerMark />
      <QuitTestMark />
      <CloseCoachMark changeStatus={changeStatus} />
    </CoachMarkContainer>
  );
}
const CoachMarkContainer = styled.section`
  ${({ theme }) => theme.effects.dimmed_60};

  position: fixed;
  color: ${({ theme }) => theme.colors.white};
  inset: 0;
`;
