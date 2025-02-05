import styled from "styled-components";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination(props: PaginationProps) {
  const { currentPage, totalPages, setCurrentPage } = props;

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

  return (
    <Container>
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
    </Container>
  );
}

const Container = styled.div`
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
