import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";
import PrecautionModal from "./components/modal/PrecautionModal";
import TestQuitModal from "./components/modal/TestQuitModal";
import TestFinishModal from "./components/modal/TestFinishModal";
import TestSubmitModal from "./components/modal/TestSubmitModal";
import styled from "styled-components";

export default function index() {
  const [openCoachMark, setOpenCoachMark] = useState(true);
  const [openPrecautionModal, setOpenPrecautionModal] = useState(false);
  const [openTestQuitModal, setOpenTestQuitModal] = useState(false);
  const [openTestFinishModal, setOpenTestFinishModal] = useState(false);
  const [openTestSubmitModal, setOpenTestSubmitModal] = useState(false);

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
  return (
    <>
      <TakeTestContainer $scroll={scroll}>
        <TestHeader
          changeTestQuitStatus={changeTestQuitStatus}
          changeTestFinishStatus={changeTestFinishStatus}
          openPrecautionModal={openPrecautionModal}
          openCoachMark={openCoachMark}
        />
        <TestPagination />
      </TakeTestContainer>
      {openCoachMark && <CoachMark toPrecautionModal={toPrecautionModal} />}
      {openPrecautionModal && <PrecautionModal changePrecautionStatus={changePrecautionStatus} />}
      {openTestQuitModal && <TestQuitModal changeTestQuitStatus={changeTestQuitStatus} />}
      {openTestFinishModal && (
        <TestFinishModal
          changeTestFinishStatus={changeTestFinishStatus}
          changeTestSubmitStatus={changeTestSubmitStatus}
        />
      )}
      {openTestSubmitModal && <TestSubmitModal />}
    </>
  );
}

const TakeTestContainer = styled.section<{ $scroll: boolean }>`
  ${({ $scroll }) => ($scroll ? "overflow:scroll" : "overflow:hidden")};

  height: 100vh;
`;
