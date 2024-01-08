import styled from "styled-components";
import { LeftCircleIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
export default function PrevPageMark() {
  return (
    <PrevPageMarkContainer>
      <LeftCircleIc />
      <CoachMarkText>이전 페이지</CoachMarkText>
    </PrevPageMarkContainer>
  );
}
export const CoachMarkText = styled.p`
  ${({ theme }) => theme.fonts.Body4};
`;
export const PageMarkContainer = styled.div`
  ${commonFlex};

  gap: 0.8rem;
  position: fixed;
  top: 50%;
  transform: translate(0, 50%);
`;
const PrevPageMarkContainer = styled(PageMarkContainer)`
  left: 16.8rem;
`;
