import styled from "styled-components";
import { ROWS_PER_PAGE } from "constants/admin";
import Pagination from "@components/pagination/Pagination";
import { TableDataTypes } from "types/tableType";

interface TableLayoutProps {
  children: React.ReactNode;
  tableData: TableDataTypes;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export default function TableLayout({ children, tableData, currentPage, setCurrentPage }: TableLayoutProps) {
  const totalPages = Math.ceil(tableData.ROWS.length / ROWS_PER_PAGE);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {Object.values(tableData.COLUMN).map((columnName) => (
              <Th key={columnName}>{columnName}</Th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
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
