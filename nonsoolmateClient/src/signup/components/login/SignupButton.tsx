import { redirectToNaverAuth } from "socialLogin/utils/redirectToNaverAuth";
import styled from "styled-components";

export default function SignupButton() {
  function loginHandler() {
    redirectToNaverAuth();
  }
  return (
    <Button onClick={loginHandler} type="button">
      네이버로 회원가입하기
    </Button>
  );
}

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.main_blue};
`;
