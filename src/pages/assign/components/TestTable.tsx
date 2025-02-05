import styled from "styled-components";
import { TEST_TABLE } from "../constants/table";
import AssignBtn from "./AssignBtn";
import ConfirmBtn from "./ConfirmBtn";
import { useState } from "react";
import { ROWS_PER_PAGE } from "constants/admin";
import TableLayout from "layout/TableLayout";

export default function TestTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = TEST_TABLE.ROWS.slice(startIndex, startIndex + ROWS_PER_PAGE);

  return (
    <TableLayout tableData={TEST_TABLE} currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {currentRows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {Object.keys(TEST_TABLE.COLUMN).map((colKey) => (
            <Td key={colKey}>
              {colKey === "ASSIGN" || colKey === "ALERT" ? (
                colKey === "ASSIGN" ? (
                  <AssignBtn />
                ) : (
                  <ConfirmBtn />
                )
              ) : (
                row[colKey as keyof typeof row]
              )}
            </Td>
          ))}
        </tr>
      ))}
    </TableLayout>
  );
}

const Td = styled.td`
  padding: 1.25rem 0.8rem;
  text-align: center;
  ${({ theme }) => theme.fonts.Body6};
`;
