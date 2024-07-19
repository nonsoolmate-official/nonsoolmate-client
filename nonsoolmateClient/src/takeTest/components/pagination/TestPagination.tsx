import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import { getFilePlugin } from "@react-pdf-viewer/get-file";
import { useGetExplanationPageData } from "answer/hooks/useGetExplanationPageData";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { useGetUniversityExamplePdf } from "takeTest/hooks/useGetUniversityExamplePdf";
import PdfViewer from "./PdfViewer";

interface PaginatinProps {
  examId: number;
}
export default function TestPagination(props: PaginatinProps) {
  const { examId } = props;

  const getFilePluginInstance = getFilePlugin();
  const fullScreenPluginInstance = fullScreenPlugin();

  const explanationRes = useGetExplanationPageData(examId);
  if (!explanationRes) return <></>;

  const {
    data: { examAnswerUrl },
  } = explanationRes;

  console.log(examAnswerUrl);
  return (
    <TakeTestContainer>
      <PdfViewer pdfUrl={examAnswerUrl} getFilePluginInstance={getFilePluginInstance} />
    </TakeTestContainer>
  );
}
const TakeTestContainer = styled.section`
  ${commonFlex}

  width: 100vw;
  height: calc(100vh - 6.4rem);
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
