import styled from "styled-components";

export default function SignupButton() {
  return <Button type="button">네이버로 회원가입하기</Button>;
}

const Button = styled.button`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.main_blue};
`;
