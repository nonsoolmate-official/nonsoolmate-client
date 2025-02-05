import styled from "styled-components";
import { STUDENT_TABLE } from "../constants/table";
import AssignBtn from "./AssignBtn";
import ConfirmBtn from "./ConfirmBtn";
import { useState } from "react";
import { ROWS_PER_PAGE } from "constants/admin";
import Pagination from "@components/pagination/Pagination";

export default function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(STUDENT_TABLE.ROWS.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const currentRows = STUDENT_TABLE.ROWS.slice(startIndex, startIndex + ROWS_PER_PAGE);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {Object.values(STUDENT_TABLE.COLUMN).map((columnName, index) => (
              <Th key={index}>{columnName}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(STUDENT_TABLE.COLUMN).map((colKey) => (
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
        </tbody>
      </Table>
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  padding: 1.25rem 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_50};
  ${({ theme }) => theme.fonts.Body6};

  text-align: center;
`;

const Td = styled.td`
  padding: 1.25rem 0.8rem;
  text-align: center;
  ${({ theme }) => theme.fonts.Body6};
`;
