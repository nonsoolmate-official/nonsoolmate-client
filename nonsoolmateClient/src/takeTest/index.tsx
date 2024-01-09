import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";
import PrecautionModal from "./components/modal/PrecautionModal";

export default function index() {
  const [openCoachMark, setOpenCoachMark] = useState(true);
  const [openPrecautionModal, setOpenPrecautionModal] = useState(false);

  function changePrecautionStatuas(precautionModal: boolean) {
    setOpenPrecautionModal(precautionModal);
  }
  function changeStatus(coachMark: boolean, precautionModal: boolean) {
    setOpenCoachMark(coachMark);
    changePrecautionStatuas(precautionModal);
  }

  return (
    <>
      <TestHeader />
      <TestPagination />
      {openCoachMark && <CoachMark changeStatus={changeStatus} />}
      {openPrecautionModal && <PrecautionModal changePrecautionStatus={changePrecautionStatuas} />}
    </>
  );
}
