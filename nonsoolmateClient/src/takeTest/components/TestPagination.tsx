import { LeftArrowBigIc, RightArrowBigIc } from "@assets/index";
import styled from "styled-components";
import testPaper1 from "../../assets/image/testPaperImg1.jpeg";
import testPaper2 from "../../assets/image/testPaperImg2.jpeg";
import testPaper3 from "../../assets/image/testPaperImg3.jpeg";
import testPaper4 from "../../assets/image/testPaperImg4.jpeg";
import { commonFlex } from "style/commonStyle";
import { useState } from "react";

export default function TestSection() {
  const testPapers = [testPaper1, testPaper2, testPaper3, testPaper4];
  const [pageNum, setPageNum] = useState(0);

  function handleMovePreviousPage() {
    setPageNum(pageNum - 1);
  }
  function handleMoveNextPage() {
    setPageNum(pageNum + 1);
  }
  return (
    <TestSectionContainer>
      <PreviousPageButton type="button" onClick={handleMovePreviousPage} disabled={pageNum === 0}>
        <LeftArrowBigIcon />
      </PreviousPageButton>
      <Test src={testPapers[pageNum]} alt="시험지 이미지" />
      <NextPageButton type="button" onClick={handleMoveNextPage} disabled={pageNum >= testPapers.length - 1}>
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
