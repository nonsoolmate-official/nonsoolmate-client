import CorrectionContainer from "answer/components/correction/CorrectionContainer";
import ExplainHeader from "answer/components/explanation/ExplainHeader";
import { useGetEditingResult } from "answer/hooks/useGetEditingResult";
import { useGetRevisionResult } from "answer/hooks/useGetRevisionResult";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";
export default function index() {
  useRefreshPage();
  const location = useLocation();
  const { examId, examStatus, examName } = location.state;

  // 첨삭 결과
  const editingRes = useGetEditingResult(examId);

  //재첨삭 결과
  const revisionRes = useGetRevisionResult(examId);

  if (!editingRes) return <></>;
  if (!revisionRes) return <></>;

  const editingResultFileUrl = editingRes.examResultFileUrl;
  const revisionResultFileUrl = revisionRes.examResultFileUrl;
  console.log(revisionResultFileUrl);

  return (
    <>
      <ExplainHeader testTitle={examName} />
      <CorrectionContainer
        editingTitle="첨삭"
        revisionTitle="재첨삭"
        examStatus={examStatus}
        editingPdfUrl={editingResultFileUrl}
        revisionPdfUrl={revisionResultFileUrl}
      />
    </>
  );
}
