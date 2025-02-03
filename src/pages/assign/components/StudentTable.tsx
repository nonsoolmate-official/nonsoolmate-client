import styled from "styled-components";
import { STUDENT_TABLE } from "../constants/table";
import AssignBtn from "./AssignBtn";
import ConfirmBtn from "./ConfirmBtn";
import { useState } from "react";

const ROWS_PER_PAGE = 7;

export default function StudentTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(STUDENT_TABLE.ROWS.length / ROWS_PER_PAGE);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

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
      <Pagination>
        <PageButton onClick={handlePrevPage} disabled={currentPage === 1}>
          &lt; 이전
        </PageButton>
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          return (
            <PageNumber key={pageNumber} $active={currentPage === pageNumber}>
              {pageNumber}
            </PageNumber>
          );
        })}
        <PageButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음 &gt;
        </PageButton>
      </Pagination>
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
`;

const PageButton = styled.button`
  padding: 0.5rem 1.4rem;
  border: 0.7px solid ${({ theme }) => theme.colors.grey_900};
  cursor: pointer;
  border-radius: 5px;
  ${({ theme }) => theme.fonts.Body6};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey_200};
    cursor: not-allowed;
  }
`;

const PageNumber = styled.p<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  color: ${({ $active, theme }) => ($active ? theme.colors.dark_blue : theme.colors.grey_900)};
  ${({ theme }) => theme.fonts.Body6};
`;
