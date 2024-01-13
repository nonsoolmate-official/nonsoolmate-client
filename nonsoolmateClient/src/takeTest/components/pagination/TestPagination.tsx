import { LeftArrowBigIc, RightArrowBigIc } from "@assets/index";
import styled from "styled-components";
import testExample from "@assets/image/testexample.png";
import { commonFlex } from "style/commonStyle";
import { useState } from "react";
import { useGetUniversityExampleImages } from "takeTest/hooks/useGetUniversityExampleImages";

interface PaginatinProps {
  openCoachMark: boolean;
  openPrecautionModal: boolean;
}
export default function TestPagination(props: PaginatinProps) {
  const { openCoachMark, openPrecautionModal } = props;
  const [paperIdx, setPaperIdx] = useState(0);

  const { data } = useGetUniversityExampleImages(paperIdx);

  const maxPage = data?.data.totalPages;

  function handleMoveToPreviousPage() {
    setPaperIdx((prev) => prev - 1);
  }
  function handleMoveToNextPage() {
    setPaperIdx((prev) => prev + 1);
  }
  return (
    <TestPaginationContainer>
      <PreviousPageButton type="button" onClick={handleMoveToPreviousPage} disabled={paperIdx === 0}>
        <LeftArrowBigIcon />
      </PreviousPageButton>
      <TestImage
        src={openCoachMark || openPrecautionModal ? testExample : data?.data.content[0].examImgUrl}
        alt="시험지 이미지"
      />
      <NextPageButton type="button" onClick={handleMoveToNextPage} disabled={paperIdx === maxPage - 1}>
        <RightArrowBigIcon />
      </NextPageButton>
    </TestPaginationContainer>
  );
}
const TestPaginationContainer = styled.section`
  ${commonFlex};
`;
const PageButtonStyle = styled.button`
  position: fixed;
  top: 50%;
  padding: 0;

  :hover {
    path {
      stroke: ${({ theme }) => theme.colors.grey_700};
    }
  }
`;
const PreviousPageButton = styled(PageButtonStyle)`
  left: 8rem;
`;
const NextPageButton = styled(PageButtonStyle)`
  right: 8rem;
`;
const RightArrowBigIcon = styled(RightArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;
const LeftArrowBigIcon = styled(LeftArrowBigIc)`
  width: 5.6rem;
  height: 5.6rem;
`;
const TestImage = styled.img`
  width: 93.6rem;
  margin: 2.4rem 8rem;
`;
