import { LeftArrowBigIc, RightArrowBigIc } from "@assets/index";
import styled from "styled-components";
import testExample from "@assets/image/testexample.png";
import { commonFlex } from "style/commonStyle";
import { useEffect, useState } from "react";
import { useGetUniversityExampleImages } from "takeTest/hooks/useGetUniversityExampleImages";
import Error from "error";

interface PaginatinProps {
  openCoachMark: boolean;
  openPrecautionModal: boolean;
  examId: number;
}
export default function TestPagination(props: PaginatinProps) {
  const { openCoachMark, openPrecautionModal, examId } = props;
  const [paperIdx, setPaperIdx] = useState(0);
  const [showPreviousIcon, setShowPreviousIcon] = useState(true);
  const [showNextIcon, setShowNextIcon] = useState(true);

  const examImage = useGetUniversityExampleImages(examId, paperIdx);

  const totalPages = examImage ? examImage.data.totalPages : 0;

  useEffect(() => {
    setShowPreviousIcon(openCoachMark || openPrecautionModal || paperIdx > 0);
    setShowNextIcon(paperIdx < totalPages - 1);
  }, [openCoachMark, openPrecautionModal, paperIdx, totalPages]);

  if (!examImage) return <Error />;
  const {
    data: { content },
  } = examImage;

  function handleMoveToPreviousPage() {
    setPaperIdx((prev) => prev - 1);
  }
  function handleMoveToNextPage() {
    setPaperIdx((prev) => prev + 1);
  }
  return (
    <TestPaginationContainer>
      <PreviousPageButton type="button" onClick={handleMoveToPreviousPage} disabled={paperIdx === 0}>
        <LeftArrowBigIcon $showPreviousIcon={showPreviousIcon} />
      </PreviousPageButton>
      <TestImage src={openCoachMark || openPrecautionModal ? testExample : content[0].examImgUrl} alt="시험지 이미지" />
      <NextPageButton type="button" onClick={handleMoveToNextPage} disabled={paperIdx === totalPages - 1}>
        <RightArrowBigIcon $showNextIcon={showNextIcon} />
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
const RightArrowBigIcon = styled(RightArrowBigIc)<{ $showNextIcon: boolean }>`
  display: ${({ $showNextIcon }) => ($showNextIcon ? "flex" : "none")};
  width: 5.6rem;
  height: 5.6rem;
`;
const LeftArrowBigIcon = styled(LeftArrowBigIc)<{ $showPreviousIcon: boolean }>`
  display: ${({ $showPreviousIcon }) => ($showPreviousIcon ? "flex" : "none")};
  width: 5.6rem;
  height: 5.6rem;
`;
const TestImage = styled.img`
  width: 93.6rem;
  margin: 2.4rem 8rem;
`;
