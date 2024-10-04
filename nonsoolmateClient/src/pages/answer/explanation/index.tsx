import { useLocation } from "react-router-dom";
import useRefreshPage from "../../socialLogin/hooks/useRefreshPage";
import ExplainHeader from "../components/explanation/ExplainHeader";
import PdfViewerWrapper from "../components/explanation/PdfViewerWrapper";
import { useGetUniversityExamAndAnswer } from "../hooks/useGetUniversityExamAndAnswer";

export default function index() {
  useRefreshPage();

  const location = useLocation();
  const { examId } = location.state;
  console.log(examId);

  const explanationRes = useGetUniversityExamAndAnswer(examId);
  if (!explanationRes) return <></>;
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
