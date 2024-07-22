import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetUniversityExamAndAnswer } from "answer/hooks/useGetUniversityExamAndAnswer";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";

export default function index() {
  useRefreshPage();
  const location = useLocation();
  const { examId } = location.state;

  const explanationRes = useGetUniversityExamAndAnswer(examId);
  if (!explanationRes) return <></>;

  const {
    data: { universityExamName, universityExamUrl, universityExamAnswerUrl },
  } = explanationRes;

  return (
    <>
      <ExplainHeader testTitle={universityExamName} />
      <PdfViewerWrapper
        firstTitle="문제"
        secondTitle="해제"
        ifExplanation={true}
        testUrl={universityExamUrl}
        firstPdfUrl={universityExamAnswerUrl}
      />
    </>
  );
}
