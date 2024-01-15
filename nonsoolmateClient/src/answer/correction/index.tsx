import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetCorrectionPageData } from "answer/hooks/useGetCorrectionPageData";
import Error from "error";
export default function index() {
  const id = 4;
  const correctionRes = useGetCorrectionPageData(id);
  if (!correctionRes) return <Error />;

  const {
    data: { universityExamName, examAnswerUrl, examResultUrl },
  } = correctionRes;

  return (
    <>
      <ExplainHeader testTitle={universityExamName} />
      <PdfViewerWrapper firstTitle="첨삭" secondTitle="해제" firstPdfUrl={examResultUrl} secondPdfUrl={examAnswerUrl} />
    </>
  );
}
