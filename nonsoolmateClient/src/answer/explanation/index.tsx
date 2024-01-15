import ExplainHeader from "answer/components/ExplainHeader";
import PdfViewerWrapper from "answer/components/PdfViewerWrapper";
import { useGetExplanationPageData } from "answer/hooks/useGetExplanationPageData";
import Error from "error";

export default function index() {
  const examId = 4;
  const explanationRes = useGetExplanationPageData(examId);
  if (!explanationRes) return <Error />;

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
