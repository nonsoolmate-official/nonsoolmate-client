import { FaceBookIc, InstaIc } from "@assets/index";
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
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-top: 2rem;
`;

const FaceBookIcon = styled(FaceBookIc)`
  width: 3.6rem;
  height: 3.6rem;
`;

const InstaIcon = styled(InstaIc)`
  width: 3.6rem;
  height: 3.6rem;
`;
