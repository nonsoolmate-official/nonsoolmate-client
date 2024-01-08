import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";
import PrecautionModal from "./components/modal/PrecautionModal";

export default function index() {
  const [coachMarkStatus, setCoachMarkStatus] = useState(true);
  const changeCoachMarkStatus = (isCoachMark: boolean) => {
    setCoachMarkStatus(isCoachMark);
  };
  return (
    <>
      <TestHeader />
      <TestPagination />
      {coachMarkStatus && <CoachMark changeCoachMarkStatus={changeCoachMarkStatus} />}
      <PrecautionModal />
    </>
  );
}
