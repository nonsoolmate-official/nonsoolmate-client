import styled from "styled-components";
import PrevPageMark from "./PrevPageMark";
import NextPageMark from "./NextPageMark";
import TimerMark from "./TimerMark";
import QuitTestMark from "./QuitTestMark";
import CloseCoachMark from "./CloseCoachMark";
import React from "react";

export interface CoachMarkProps {
  setCoachMarkStatus: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CoachMark(props: CoachMarkProps) {
  const { setCoachMarkStatus } = props;
  return (
    <CoachMarkContainer>
      <PrevPageMark />
      <NextPageMark />
      <TimerMark />
      <QuitTestMark />
      <CloseCoachMark setCoachMarkStatus={setCoachMarkStatus} />
    </CoachMarkContainer>
  );
}
const CoachMarkContainer = styled.section`
  ${({ theme }) => theme.effects.dimmed_60};

  position: fixed;
  color: ${({ theme }) => theme.colors.white};
  inset: 0;
`;
export const CoachMarkText = styled.p`
  ${({ theme }) => theme.fonts.Body4};
`;
