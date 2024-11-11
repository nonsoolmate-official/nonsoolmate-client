import { InstaIc, KakaoIc } from "@assets/index";
import { openUrl } from "@utils/openUrl";
import styled from "styled-components";

export default function Sns() {
  return (
    <Container>
      <BtnWrapper type="button" onClick={() => openUrl("http://pf.kakao.com/_iuHpG")}>
        <KakaoIcon />
      </BtnWrapper>
      <BtnWrapper
        type="button"
        onClick={() => openUrl("https://www.instagram.com/nonsoolmate?igsh=amFiemthdmRxMDg4&utm_source=qr")}>
        <InstaIcon />
      </BtnWrapper>
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

const BtnWrapper = styled.button`
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;
