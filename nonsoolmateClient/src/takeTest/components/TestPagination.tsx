import { LeftArrowBigIc, RightArrowBigIc } from "@assets/index";
import styled from "styled-components";
import testPaper1 from "../../assets/image/testPaperImg1.jpeg";
import { commonFlex } from "style/commonStyle";

export default function TestSection() {
  return (
    <TestSectionContainer>
      <PreviousPageButton>
        <LeftArrowBigIcon />
      </PreviousPageButton>
      <Test src={testPaper1} alt="시험지 이미지" />
      <NextPageButton>
        <RightArrowBigIcon />
      </NextPageButton>
    </TestSectionContainer>
  );
}
const TestSectionContainer = styled.section`
  ${commonFlex};

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
const Test = styled.img`
  width: 93rem;
  margin: 2.4rem 8rem;
`;
