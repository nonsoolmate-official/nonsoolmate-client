import { InstaIc, KakaoIc } from "@assets/index";
import styled from "styled-components";

export default function Sns() {
  return (
    <Container>
      <InstaIcon />
      <KakaoIcon />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const KakaoIcon = styled(KakaoIc)`
  width: 3.6rem;
  height: 3.6rem;
`;

const InstaIcon = styled(InstaIc)`
  width: 3.6rem;
  height: 3.6rem;
`;
