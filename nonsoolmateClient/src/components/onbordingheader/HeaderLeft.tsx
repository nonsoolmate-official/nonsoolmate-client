import { LogoIc } from "@assets/index";
import useGetName from "home/hooks/useGetName";
import { useNavigate } from "react-router";
import styled from "styled-components";

export default function HeaderLeft() {
  const navigate = useNavigate();
  const getNameResponse = useGetName();
  return (
    <LogoContainer type="button" onClick={() => (getNameResponse ? navigate("/home/test") : navigate("/"))}>
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
