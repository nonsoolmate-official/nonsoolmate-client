import { RightCircleIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { CoachMarkText } from "./CoachMark";

export default function NextPageMark() {
  return (
    <NextPageMarkContainer>
      <CoachMarkText>다음 페이지</CoachMarkText>
      <RightCircleIc />
    </NextPageMarkContainer>
  );
}
const NextPageMarkContainer = styled.div`
  ${commonFlex};

  gap: 0.8rem;
  position: fixed;
  top: 50%;
  transform: translate(0, 50%);
  right: 16.8rem;
`;
