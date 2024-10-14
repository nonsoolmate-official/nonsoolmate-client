import { PayFailIc } from "@assets/index";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

interface ModalProps {
  showAlreadyPaidError: (open: boolean) => void;
}

export default function FailModal(props: ModalProps) {
  const { showAlreadyPaidError } = props;

  function handleConfirm() {
    showAlreadyPaidError(false);
  }

  return (
    <BackgroundView>
      <ModalView>
        <Text>결제에 실패하였습니다</Text>
        <IconWrapper>
          <PayFailIcon />
        </IconWrapper>
        <Container>
          <Contents>
            <Title>결제 실패 사유</Title>
            <SubTitle>이미 멤버십 플랜을 이용 중입니다.</SubTitle>
          </Contents>
        </Container>
        <Button type="button" onClick={handleConfirm}>
          확인
        </Button>
      </ModalView>
    </BackgroundView>
  );
}

const BackgroundView = styled.section`
  position: absolute;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;

const ModalView = styled.section`
  ${({ theme }) => theme.effects.modal_shadow};

  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 43.6rem;
  padding: 3.2rem 2.4rem;
  border-radius: 12px;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 16px 0 rgb(0 0 0 / 5%);

  ${media.tablet} {
    top: 40%;
    transform: translate(-50%, -30%);
  }
`;

const Text = styled.p`
  margin-top: 1.6rem;
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline4};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const PayFailIcon = styled(PayFailIc)`
  width: 12rem;
  height: 12rem;
  margin-top: 2.8rem;
`;

const Container = styled.section`
  display: flex;
  flex-flow: column;
  gap: 0.8rem;
  width: 100%;
  margin-top: 4.4rem;
  margin-bottom: 4.4rem;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Button = styled.button`
  padding: 0.8rem 0;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Headline5};

  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
