import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";
import PrecautionModal from "./components/modal/PrecautionModal";
import TestQuitModal from "./components/modal/TestQuitModal";
import TestFinishModal from "./components/modal/TestFinishModal";
import TestSubmitModal from "./components/modal/TestSubmitModal";
import styled from "styled-components";
import { useGetUniversityExam } from "./hooks/useGetUniversityExam";
import useGetPresignedUrl from "./hooks/useGetPresignedUrl";

export default function index() {
  const [openCoachMark, setOpenCoachMark] = useState(true);
  const [openPrecautionModal, setOpenPrecautionModal] = useState(false);
  const [openTestQuitModal, setOpenTestQuitModal] = useState(false);
  const [openTestFinishModal, setOpenTestFinishModal] = useState(false);
  const [openTestSubmitModal, setOpenTestSubmitModal] = useState(false);
  const [totalTime, setTotalTime] = useState(0);
  const [isFile, setIsFile] = useState<File[] | null>(null);

  const examRes = useGetUniversityExam(1);
  const preSignedRes = useGetPresignedUrl();
  if (!examRes) return null;

  const {
    data: { examName, examTimeLimit },
  } = examRes;

  const {
    data: { resultFileName, preSignedUrl },
  } = preSignedRes;

  const scroll = !(
    openCoachMark ||
    openPrecautionModal ||
    openTestQuitModal ||
    openTestFinishModal ||
    openTestSubmitModal
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
        <TestPagination openCoachMark={openCoachMark} openPrecautionModal={openPrecautionModal} />
      </TakeTestContainer>
      {openCoachMark && <CoachMark toPrecautionModal={toPrecautionModal} />}
      {openPrecautionModal && <PrecautionModal changePrecautionStatus={changePrecautionStatus} />}
      {openTestQuitModal && <TestQuitModal changeTestQuitStatus={changeTestQuitStatus} />}
      {openTestFinishModal && (
        <TestFinishModal
          changeTestFinishStatus={changeTestFinishStatus}
          changeTestSubmitStatus={changeTestSubmitStatus}
          totalTime={totalTime}
          saveFile={saveFile}
        />
      )}
      {openTestSubmitModal && <TestSubmitModal isFile={isFile} />}
    </>
  );
}

const TakeTestContainer = styled.section<{ $scroll: boolean }>`
  ${({ $scroll }) => ($scroll ? "overflow:scroll" : "overflow:hidden")};

  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;
