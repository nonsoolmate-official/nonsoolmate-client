import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { FOOTER_LIST } from "onbording/core/footerlist";

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
  ${commonFlex}

  gap: 3.3rem;
  justify-content: space-between;
`;

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_600};
`;
