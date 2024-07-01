import styled from "styled-components";
import { LogoIc } from "@assets/index";
import { media } from "style/responsiveStyle";

export default function FooterLeft() {
  return (
    <LogoContainer>
      <LogoIcon />
    </LogoContainer>
  );
}

const LogoContainer = styled.div`
  display: flex;
  padding: 0 15.8rem 0 0;

  ${media.tablet} {
    padding: 0;
  }
`;

const LogoIcon = styled(LogoIc)`
  width: 15.6rem;
  height: 2rem;
`;
