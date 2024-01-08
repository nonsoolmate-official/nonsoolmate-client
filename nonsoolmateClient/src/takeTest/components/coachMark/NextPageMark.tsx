import { RightCircleIc } from "@assets/index";
import styled from "styled-components";
import { CoachMarkText, PageMarkContainer } from "./PrevPageMark";

export default function NextPageMark() {
  return (
    <NextPageMarkContainer>
      <CoachMarkText>다음 페이지</CoachMarkText>
      <RightCircleIc />
    </NextPageMarkContainer>
  );
}
const NextPageMarkContainer = styled(PageMarkContainer)`
  right: 16.8rem;
`;
