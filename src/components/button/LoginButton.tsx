import { commonFlex } from "style/commonStyle";
import styled from "styled-components";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

export default function LoginButton() {
  const navigate = useNavigate();
  const isMobileSize = useMediaQuery({ query: "(max-width:430px)" });

  function hanleLoginBtn() {
    isMobileSize ? navigate("/mobile/error") : navigate("/signup");
  }

  return (
    <Button type="button" onClick={hanleLoginBtn}>
      로그인
    </Button>
  );
}

const Button = styled.button`
  ${commonFlex}

  /* width: 6.8rem; */
  height: 3.2rem;
  padding: 0.4rem 1.3rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body3};

  color: ${({ theme }) => theme.colors.white};
`;
