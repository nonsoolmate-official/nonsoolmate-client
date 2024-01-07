import styled from "styled-components";
import { LeftCircleIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import { CoachMarkText } from "./CoachMark";

export default function PrevPageMark() {
  return (
    <PrevPageMarkContainer>
      <LeftCircleIc />
      <CoachMarkText>이전 페이지</CoachMarkText>
    </PrevPageMarkContainer>
  );
}
const PrevPageMarkContainer = styled.div`
  ${commonFlex};

  gap: 0.8rem;
  position: fixed;
  top: 50%;
  transform: translate(0, 50%);
  left: 16.8rem;
`;
