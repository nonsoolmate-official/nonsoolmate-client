import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import PrevPageMark from "./PrevPageMark";
import NextPageMark from "./NextPageMark";
import TimerMark from "./TimerMark";
import QuitTestMark from "./QuitTestMark";

export default function CoachMark() {
  return (
    <CoachMarkContainer>
      <PrevPageMark />
      <NextPageMark />
      <TimerMark />
      <QuitTestMark />
    </CoachMarkContainer>
  );
}
const CoachMarkContainer = styled.section`
  position: fixed;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.6;
  inset: 0;
`;
export const CoachMarkText = styled.p`
  ${({ theme }) => theme.fonts.Body4};
`;
