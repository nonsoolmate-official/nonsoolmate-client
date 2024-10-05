import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useRefreshPage from "../../socialLogin";
import CorrectionContainer from "../components/correction/CorrectionContainer";
import ExplainHeader from "../components/explanation/ExplainHeader";
import { useGetEditingResult } from "../hooks/useGetEditingResult";
import { useGetRevisionResult } from "../hooks/useGetRevisionResult";

export default function index() {
  useRefreshPage();
  const location = useLocation();
  const { examId, examName, examStatus } = location.state;
  const [revisionStatus, setRevisionStatus] = useState(examStatus);
  const [revisionPdfUrl, setRevisionPdfUrl] = useState("");

  // 첨삭 결과
  const editingRes = useGetEditingResult(examId);

  // 재첨삭 결과
  const { data: revisionRes } = useGetRevisionResult(examId, examStatus);

  useEffect(() => {
    if (revisionRes) {
      setRevisionPdfUrl(revisionRes.examResultFileUrl);
      setRevisionStatus(revisionRes.examResultStatus);
    }
  }, [revisionRes]);

  if (!editingRes) return <></>;
  const editingResultFileUrl = editingRes.examResultFileUrl;

  return (
    <>
      <ExplainHeader testTitle={examName} />
      <CorrectionContainer
        editingTitle="첨삭"
        editingPdfUrl={editingResultFileUrl}
        revisionStatus={revisionStatus}
        revisionPdfUrl={revisionPdfUrl}
      />
    </>
  );
}
