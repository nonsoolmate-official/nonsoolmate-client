import { FOOTER_LIST } from "landing/core/footerlist";
import styled from "styled-components";

export default function Buttons() {
  return (
    <Container>
      {FOOTER_LIST.map((item) => {
        return (
          <Button key={item} type="button">
            {item}
          </Button>
        );
      })}
    </Container>
  );
}

const Container = styled.article`
  display: flex;
  gap: 3.3rem;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  padding: 0;

  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_600};
`;
