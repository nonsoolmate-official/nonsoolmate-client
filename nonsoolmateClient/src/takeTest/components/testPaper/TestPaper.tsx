import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import PdfViewer from "./PdfViewer";
import { useGetUniversityExamPdf } from "takeTest/hooks/useGetUniversityExamPdf";

interface PaginatinProps {
  examId: number;
}
export default function TestPaper(props: PaginatinProps) {
  const { examId } = props;

  const getFilePluginInstance = getFilePlugin();

  const response = useGetUniversityExamPdf(examId);
  if (!response) return <></>;

  const {
    data: { examUrl },
  } = response;

  return (
    <TestPaperContainer>
      <PdfViewer pdfUrl={examUrl} getFilePluginInstance={getFilePluginInstance} />
    </TestPaperContainer>
  );
}
const TestPaperContainer = styled.section`
  ${commonFlex}

  width: 100vw;
  height: calc(100vh - 6.4rem);
`;
