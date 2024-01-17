import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import LoadingImg from "@assets/image/loadingIc.png";

export default function Loading() {
  return (
    <Container>
      <Image src={LoadingImg} alt="loadingImg" />
      <Text>잠시만 기다려주세요</Text>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex};

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_50};
`;

const Text = styled.h1`
  color: ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body2};
`;

const Image = styled.img`
  width: 60rem;
  height: 20rem;
`;
