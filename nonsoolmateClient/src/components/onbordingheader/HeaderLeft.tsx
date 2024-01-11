import { LogoIc } from "@assets/index";
import styled from "styled-components";

export default function HeaderLeft() {
  return <LogoIcon />;
}

const LogoIcon = styled(LogoIc)`
  width: 15.6rem;
  height: 2rem;
`;
