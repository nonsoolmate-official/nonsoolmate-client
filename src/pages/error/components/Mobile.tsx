import { MobileErrorIc } from "@assets/index";
import { columnFlex } from "style/commonStyle";
import styled from "styled-components";
import { ERROR_MESSAGE } from "constants/errorMessage";
import Button from "@components/button/Button";
import { useNavigate } from "react-router-dom";
import { openUrl } from "@utils/openUrl";
import { INSTRUCTION_LINK } from "../constants/mobile";

export default function Mobile() {
  const navigate = useNavigate();

  return (
    <Container>
      <MobileErrorIcon />
      <Contents>
        <Text>{ERROR_MESSAGE.MOBILE}</Text>
        <Text>PC로 확인해주세요!</Text>
      </Contents>
      <Buttons>
        <Button variant="mobile_gray" onClick={() => navigate("/")}>
          돌아가기
        </Button>
        <Button variant="mobile_blue" onClick={() => openUrl(INSTRUCTION_LINK)}>
          안내보기
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.section`
  ${columnFlex};

  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`;

const MobileErrorIcon = styled(MobileErrorIc)`
  width: 10rem;
  height: 10rem;
`;

const Contents = styled.div`
  ${columnFlex};

  margin-top: 3.6rem;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Body1};
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5.4rem;
`;
