import { LeftArrowBigIc, RightArrowBigIc } from "@assets/index";
import styled from "styled-components";

export default function TestSection() {
  return (
    <TestSectionContainer>
      <PreviousPageButton>
        <LeftArrowBigIcon />
      </PreviousPageButton>
      <NextPageButton>
        <RightArrowBigIcon />
      </NextPageButton>
    </TestSectionContainer>
  );
}
const TestSectionContainer = styled.section`
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
const PreviousPageButton = styled.button`
  position: fixed;
  top: 50%;
  left: 8rem;
  padding: 0;
`;
const NextPageButton = styled.button`
  position: fixed;
  top: 50%;
  right: 8rem;
  padding: 0;
`;
const RightArrowBigIcon = styled(RightArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;
const LeftArrowBigIcon = styled(LeftArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;
