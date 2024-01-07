import { useState } from "react";
import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";

export default function index() {
  const [coachMarkStatus, setCoachMarkStatus] = useState(true);
  return (
    <>
      <TestHeader />
      <TestPagination />
      {coachMarkStatus && <CoachMark setCoachMarkStatus={setCoachMarkStatus} />}
    </>
  );
}
