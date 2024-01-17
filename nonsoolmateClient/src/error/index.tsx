import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import ErrorImg from "@assets/image/errorIc.png";

export default function Error() {
  return (
    <Container>
      <Image src={ErrorImg} alt="errorimg" />
      <Text>이용에 불편을 드려 죄송합니다.</Text>
      <Text>관리자에게 문의하세요.</Text>
      <Button>홈으로</Button>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex};

  width: 100%;
  height: 100vh;
`;

const Image = styled.img`
  width: 60rem;
  height: 20rem;
`;

const Text = styled.h1`
  color: ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body2};
`;

const Button = styled.button`
  ${commonFlex}

  ${({ theme }) => theme.fonts.Headline5};

  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
