import { LogoIc } from "@assets/index";

import { useNavigate } from "react-router";

import useGetName from "@pages/home/hooks/useGetName";
import { getToken } from "@pages/socialLogin/utils/token";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

export default function HeaderLeft() {
  const navigate = useNavigate();
  const token = getToken();
  const getNameResponse = token ? useGetName() : null;
  return (
    <LogoContainer type="button" onClick={() => (getNameResponse ? navigate("/home/test") : navigate("/"))}>
      <LogoIcon />
    </LogoContainer>
  );
}

const LogoContainer = styled.button`
  display: flex;
  padding: 0 0 0 21.5rem;

  ${media.tablet} {
    padding: 0 3.2rem;
  }
`;

const LogoIcon = styled(LogoIc)`
  width: 15.6rem;
  height: 2rem;
`;
