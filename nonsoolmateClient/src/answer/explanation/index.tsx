import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetExplanationPageData } from "answer/hooks/useGetExplanationPageData";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";

export default function index() {
  useRefreshPage();
  const location = useLocation();
  const { examId } = location.state;

  const explanationRes = useGetExplanationPageData(examId);
  if (!explanationRes) return <></>;

  const {
    data: { universityExamName, examQuestionList, examAnswerUrl },
  } = explanationRes;

  return (
    <>
      <ExplainHeader testTitle={universityExamName} />
      <PdfViewerWrapper
        firstTitle="문제"
        secondTitle="해제"
        ifExplanation={true}
        testImages={examQuestionList}
        firstPdfUrl={examAnswerUrl}
      />
    </>
  );
}
