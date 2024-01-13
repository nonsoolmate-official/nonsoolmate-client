import { LogoIc } from "@assets/index";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function HeaderLeft() {
  const navigate = useNavigate();
  return (
    <LogoContainer type="button" onClick={() => navigate("/")}>
      <LogoIcon />
    </LogoContainer>
  );
}

const LogoIcon = styled(LogoIc)`
  width: 15.6rem;
  height: 2rem;
`;

const LogoContainer = styled.button`
  display: flex;
`;
