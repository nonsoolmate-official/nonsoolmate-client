import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import PrecautionModal from "./components/modal/PrecautionModal";
import TestQuitModal from "./components/modal/TestQuitModal";
import TestFinishModal from "./components/modal/TestFinishModal";
import TestSubmitModal from "./components/modal/TestSubmitModal";
import styled from "styled-components";
import { useGetUniversityExam } from "./hooks/useGetUniversityExam";
import { useLocation } from "react-router-dom";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";
import EndTestModal from "./components/modal/EndTestModal";
import TestPaper from "./components/testPaper/TestPaper";
import { useRecoilValue } from "recoil";
import { takeTestPdfPlugin } from "recoil/atom";

export default function index() {
  useRefreshPage();
  const [openCoachMark, setOpenCoachMark] = useState(true);
  const [openPrecautionModal, setOpenPrecautionModal] = useState(false);
  const [openTestQuitModal, setOpenTestQuitModal] = useState(false);
  const [openTestFinishModal, setOpenTestFinishModal] = useState(false);
  const [openTestSubmitModal, setOpenTestSubmitModal] = useState(false);
  const [openEndTestModal, setOpenEndTestModal] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [isFile, setIsFile] = useState<File[] | null>(null);
  const pdfPlugin = useRecoilValue(takeTestPdfPlugin);

  const location = useLocation();
  const { examId } = location.state;

  const examRes = useGetUniversityExam(examId);
  if (!examRes) return <></>;

  const {
    data: { examName, examTimeLimit },
  } = examRes;

  const scroll = !(
    openCoachMark ||
    openPrecautionModal ||
    openTestQuitModal ||
    openTestFinishModal ||
    openTestSubmitModal ||
    openEndTestModal
  );
  function changePrecautionStatus(precautionModal: boolean) {
    setOpenPrecautionModal(precautionModal);
  }
  function toPrecautionModal(coachMark: boolean, precautionModal: boolean) {
    setOpenCoachMark(coachMark);
    changePrecautionStatus(precautionModal);
  }
  function changeTestQuitStatus(testQuitModal: boolean) {
    setOpenTestQuitModal(testQuitModal);
  }
  function changeTestFinishStatus(testFinishModal: boolean) {
    setOpenTestFinishModal(testFinishModal);
  }
  function changeTestSubmitStatus(testSubmitModal: boolean) {
    setOpenTestSubmitModal(testSubmitModal);
  }
  function changeTestEndStatus(testEndModal: boolean) {
    setOpenEndTestModal(testEndModal);
  }
  function computeTakeTime(takeTime: number) {
    setTotalTime(takeTime);
  }
  function saveFile(imageFile: File[]) {
    setIsFile(imageFile);
  }
  return (
    <>
      <TakeTestContainer $scroll={scroll}>
        <TestHeader
          changeTestQuitStatus={changeTestQuitStatus}
          changeTestFinishStatus={changeTestFinishStatus}
          computeTakeTime={computeTakeTime}
          openTestFinishModal={openTestFinishModal}
          openTestSubmitModal={openTestSubmitModal}
          openPrecautionModal={openPrecautionModal}
          openCoachMark={openCoachMark}
          examName={examName}
          examTimeLimit={examTimeLimit}
        />
        <TestPaper examId={examId} openCoachMark={openCoachMark} openPrecautionModal={openPrecautionModal} />
      </TakeTestContainer>
      {!pdfPlugin && openCoachMark && <CoachMark toPrecautionModal={toPrecautionModal} />}
      {!pdfPlugin && openPrecautionModal && <PrecautionModal changePrecautionStatus={changePrecautionStatus} />}
      {openTestQuitModal && <TestQuitModal changeTestQuitStatus={changeTestQuitStatus} />}
      {openTestFinishModal && (
        <TestFinishModal
          changeTestFinishStatus={changeTestFinishStatus}
          changeTestSubmitStatus={changeTestSubmitStatus}
          totalTime={totalTime}
          saveFile={saveFile}
        />
      )}
      {openTestSubmitModal && (
        <TestSubmitModal
          isFile={isFile}
          totalTime={totalTime}
          changeTestEndStatus={changeTestEndStatus}
          changeTestSubmitStatus={changeTestSubmitStatus}
        />
      )}
      {openEndTestModal && <EndTestModal />}
    </>
  );
}

const TakeTestContainer = styled.section<{ $scroll: boolean }>`
  ${({ $scroll }) => ($scroll ? "overflow:scroll" : "overflow:hidden")};

  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
