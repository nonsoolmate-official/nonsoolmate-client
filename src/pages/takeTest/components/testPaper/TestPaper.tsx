import testExample from "@assets/image/blurTestImage.png";
import testExampleIpad from "@assets/image/blurTestImageIpad.png";
import styled from "styled-components";
import PdfViewer from "./PdfViewer";

import { useGetUniversityExamPdf } from "@pages/takeTest/hooks/useGetUniversityExamPdf";
import { useRecoilValue } from "recoil";
import { takeTestPdfPlugin } from "recoil/atom";
import { media } from "style/responsiveStyle";

interface TestPaperProps {
  openCoachMark: boolean;
  openPrecautionModal: boolean;
  examId: number;
}
export default function TestPaper(props: TestPaperProps) {
  const { openCoachMark, openPrecautionModal, examId } = props;

  const pdfPlugin = useRecoilValue(takeTestPdfPlugin);

  const response = useGetUniversityExamPdf(examId);
  if (!response) return <></>;

  const {
    data: { examUrl },
  } = response;

  return (
    <TestPaperContainer $pdfPlugin={pdfPlugin}>
      {pdfPlugin ? (
        <PdfViewer pdfUrl={examUrl} />
      ) : openCoachMark || openPrecautionModal ? (
        <>
          <BlurTestImage src={testExample} />
          <BlurTestImageIpad src={testExampleIpad} />
        </>
      ) : (
        <PdfViewer pdfUrl={examUrl} />
      )}
    </TestPaperContainer>
  );
}

const TestPaperContainer = styled.section<{ $pdfPlugin: boolean }>`
  display: flex;
  flex-direction: ${({ $pdfPlugin }) => ($pdfPlugin ? "column" : "row")};
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: calc(100vh - 6.4rem);
`;

const BlurTestImage = styled.img`
  width: 100%;
  ${media.tablet} {
    display: none;
  }
`;

const BlurTestImageIpad = styled.img`
  display: none;
  width: 100%;
  ${media.tablet} {
    display: block;
  }
`;
