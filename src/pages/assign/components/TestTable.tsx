import styled from "styled-components";
import { TEST_TABLE } from "../constants/table";
import AssignBtn from "./AssignBtn";
import ConfirmBtn from "./ConfirmBtn";

export default function TestTable() {
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            {Object.values(TEST_TABLE.COLUMN).map((columnName, index) => (
              <Th key={index}>{columnName}</Th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TEST_TABLE.ROWS.map((row, rowIndex) => (
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
        </tbody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
