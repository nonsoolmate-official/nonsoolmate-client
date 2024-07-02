import styled from "styled-components";
import { FOOTER_LIST } from "onboarding/core/footerlist";

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
`;

const Button = styled.button`
  display: flex;
  padding: 0;

  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_600};
`;
