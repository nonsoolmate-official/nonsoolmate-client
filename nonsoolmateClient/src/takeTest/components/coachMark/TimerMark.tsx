import styled from "styled-components";
import { LeftCircleLongIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import { CoachMarkText } from "./PrevPageMark";

export default function TimerMark() {
  return (
    <TimerMarkContainer>
      <LeftCircleLongIcon />
      <CoachMarkText>
        타이머가 끝나면
        <br />
        시험이 자동 종료돼요
      </CoachMarkText>
    </TimerMarkContainer>
  );
}
const TimerMarkContainer = styled.div`
  ${commonFlex};

  gap: 0.8rem;
  position: fixed;
  top: 0.8rem;
  left: 55.5%;
`;
const LeftCircleLongIcon = styled(LeftCircleLongIc)`
  width: 8.4rem;
  height: 0.4rem;
`;
