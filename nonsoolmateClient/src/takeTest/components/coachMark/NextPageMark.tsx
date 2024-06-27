import { RightCircleIc } from "@assets/index";
import styled from "styled-components";
import { CoachMarkText, PageMarkContainer } from "./PrevPageMark";
import { media } from "style/responsiveStyle";

export default function NextPageMark() {
  return (
    <NextPageMarkContainer>
      <CoachMarkText>다음 페이지</CoachMarkText>
      <RightCircleIcon />
    </NextPageMarkContainer>
  );
}

const NextPageMarkContainer = styled(PageMarkContainer)`
  right: 16.8rem;
  ${media.tablet} {
    right: 4.8rem;
  }
`;
const RightCircleIcon = styled(RightCircleIc)`
  width: 3.9rem;
  height: 0.4rem;
`;
