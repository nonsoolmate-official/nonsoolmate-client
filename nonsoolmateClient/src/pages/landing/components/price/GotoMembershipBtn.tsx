import theme from "style/theme";
import styled from "styled-components";

export default function GotoMembershipBtn() {
  return <Button type="button">가격 자세히 보기 {">"}</Button>;
}

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body3}

  padding: 0.8rem 1.6rem;
  border-radius: 8px;
  background-color: ${theme.colors.grey_800};
  color: ${theme.colors.white};
`;
