import { PaySuccessIc } from "@assets/index";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

interface ModalProps {
  changeSelectUnivModalStatus: (open: boolean) => void;
  changeSuccessModalStatus: (open: boolean) => void;
  finalPrice_afterCoupon: number;
  planTitle: string;
}

export default function SuccessModal(props: ModalProps) {
  const { changeSelectUnivModalStatus, changeSuccessModalStatus, finalPrice_afterCoupon, planTitle } = props;

  function handleNext() {
    changeSelectUnivModalStatus(true);
    changeSuccessModalStatus(false);
  }

  return (
    <BackgroundView>
      <ModalView>
        <Text>결제가 완료되었습니다</Text>
        <IconWrapper>
          <PaySuccessIcon />
        </IconWrapper>
        <Container>
          <Contents>
            <Title>주문 정보</Title>
            <Value>{planTitle}</Value>
          </Contents>
          <Contents>
            <Title>총 결제 금액</Title>
            <Value>{finalPrice_afterCoupon}원 / 월</Value>
          </Contents>
        </Container>
        <NextButton type="button" onClick={handleNext}>
          다음
        </NextButton>
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
  box-shadow: ${({ theme }) => theme.effects.modal_shadow};

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

const PaySuccessIcon = styled(PaySuccessIc)`
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
  justify-content: space-between;
`;

const Title = styled.p`
  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const Value = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const NextButton = styled.button`
  padding: 0.8rem 0;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.Headline5};

  background-color: ${({ theme }) => theme.colors.main_blue};
  color: ${({ theme }) => theme.colors.white};
`;
