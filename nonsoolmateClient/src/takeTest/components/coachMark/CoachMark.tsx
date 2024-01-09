import styled from "styled-components";
import PrevPageMark from "./PrevPageMark";
import NextPageMark from "./NextPageMark";
import TimerMark from "./TimerMark";
import QuitTestMark from "./QuitTestMark";
import CloseCoachMark from "./CloseCoachMark";

export interface CoachMarkProps {
  changeStatus: (coachMark: boolean, precautionModal: boolean) => void;
}
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
