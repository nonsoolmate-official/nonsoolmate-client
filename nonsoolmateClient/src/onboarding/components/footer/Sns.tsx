import { FaceBookIc, InstaIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import styled from "styled-components";

export default function Sns() {
  return (
    <Container>
      <FaceBookIcon />
      <InstaIcon />
    </Container>
  );
}

const Container = styled.div`
  ${commonFlex}

  gap: 1.5rem;
  justify-content: space-between;
`;

const FaceBookIcon = styled(FaceBookIc)`
  width: 3.6rem;
  height: 3.6rem;
`;

const InstaIcon = styled(InstaIc)`
  width: 3.6rem;
  height: 3.6rem;
`;
