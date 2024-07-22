import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetUniversityExamAndAnswer } from "answer/hooks/useGetUniversityExamAndAnswer";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";

export default function index() {
  useRefreshPage();

  const location = useLocation();
  const { examId } = location.state;
  console.log(examId);

  const explanationRes = useGetUniversityExamAndAnswer(examId);
  if (!explanationRes) return <></>;
  console.log(explanationRes);
  const {
    data: { examName, examUrl, examAnswerUrl },
  } = explanationRes;

  return (
    <>
      <ExplainHeader testTitle={examName} />
      <PdfViewerWrapper
        firstTitle="문제"
        secondTitle="해제"
        ifExplanation={true}
        testUrl={examUrl}
        firstPdfUrl={examAnswerUrl}
      />
    </>
  );
}
