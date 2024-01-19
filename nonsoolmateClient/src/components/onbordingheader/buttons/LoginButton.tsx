import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { useNavigate } from "react-router";

export default function LoginButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="button"
      onClick={() => {
        navigate("/signup");
      }}>
      로그인
    </Button>
  );
}

const Button = styled.button`
  ${commonFlex}

  width: 6.8rem;
  height: 3.2rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.white};
`;
