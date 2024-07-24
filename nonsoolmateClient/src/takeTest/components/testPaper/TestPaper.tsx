import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import PdfViewer from "./PdfViewer";
import testExampleIpad from "@assets/image/blurTestImageIpad.png";
import testExample from "@assets/image/blurTestImage.png";
import { useGetUniversityExamPdf } from "takeTest/hooks/useGetUniversityExamPdf";
import { media } from "style/responsiveStyle";

interface TestPaperProps {
  openCoachMark: boolean;
  openPrecautionModal: boolean;
  examId: number;
}
export default function TestPaper(props: TestPaperProps) {
  const { openCoachMark, openPrecautionModal, examId } = props;

  const getFilePluginInstance = getFilePlugin();

  const response = useGetUniversityExamPdf(examId);
  if (!response) return <></>;

  const {
    data: { examUrl },
  } = response;

  return (
    <TestPaperContainer>
      {openCoachMark || openPrecautionModal ? (
        <>
          <BlurTestImage src={testExample} />
          <BlurTestImageIpad src={testExampleIpad} />
        </>
      ) : (
        <PdfViewer pdfUrl={examUrl} getFilePluginInstance={getFilePluginInstance} />
      )}
    </TestPaperContainer>
  );
}
const TestPaperContainer = styled.section`
  ${commonFlex}

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
