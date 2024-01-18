import { columnFlex, commonFlex } from "style/commonStyle";
import styled from "styled-components";
import ErrorImg from "@assets/image/errorIc.png";
import { useNavigate } from "react-router-dom";

export default function Error() {
  const navigate = useNavigate();

  return (
    <Container>
      <Image src={ErrorImg} alt="errorimg" />
      <Wrapper>
        <Text>이용에 불편을 드려 죄송합니다.</Text>
        <Text>관리자에게 문의하세요.</Text>
        <Button type="button" onClick={() => navigate(-1)}>
          이전 화면으로
        </Button>
      </Wrapper>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex};

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_50};
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

  width: 16rem;
  height: 4.4rem;
  border-radius: 8px;

  ${({ theme }) => theme.fonts.Headline5};

  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;

const Wrapper = styled.div`
  ${columnFlex};

  gap: 1.6rem;
`;
