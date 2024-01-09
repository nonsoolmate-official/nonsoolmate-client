import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function LoginButton() {
  return <Button type="button">로그인</Button>;
}

const Button = styled.button`
  ${commonFlex}

  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.white};
`;
