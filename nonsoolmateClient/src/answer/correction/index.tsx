import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetCorrectionPageData } from "answer/hooks/useGetCorrectionPageData";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";
export default function index() {
  useRefreshPage();
  const location = useLocation();
  const { examId } = location.state;

  const correctionRes = useGetCorrectionPageData(examId);
  if (!correctionRes) return <></>;

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
