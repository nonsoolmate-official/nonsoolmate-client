import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Buttons() {
  return (
    <Container>
      <Button type="button">Product</Button>
      <Button type="button">Information</Button>
      <Button type="button">Company</Button>
      <Button type="button">Terms</Button>
      <Button type="button">Privacy</Button>
      <Button type="button">Cookies</Button>
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
