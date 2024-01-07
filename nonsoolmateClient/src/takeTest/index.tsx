import CoachMark from "./components/coachMark/CoachMark";
import TestHeader from "./components/header/TestHeader";
import TestPagination from "./components/pagination/TestPagination";

export default function index() {
  return (
    <>
      <TestHeader />
      <TestPagination />
      <CoachMark />
    </>
  );
}
