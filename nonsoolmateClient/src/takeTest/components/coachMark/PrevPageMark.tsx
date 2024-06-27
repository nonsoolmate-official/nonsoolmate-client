import styled from "styled-components";
import { LeftCircleIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import { media } from "style/responsiveStyle";
export default function PrevPageMark() {
  return (
    <PrevPageMarkContainer>
      <LeftCircleIcon />
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
  ${media.tablet} {
    left: 4.8rem;
  }
`;
const LeftCircleIcon = styled(LeftCircleIc)`
  width: 3.9rem;
  height: 0.4rem;
`;
