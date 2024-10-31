import { media } from "style/responsiveStyle";
import styled from "styled-components";
import { lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";
import { Advan5Ic } from "@assets/index";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  changeQuitModalStatus: (open: boolean) => void;
  changeSelectUnivModalStatus: (open: boolean) => void;
}

export default function QuitMatchModal(props: ModalProps) {
  const { changeQuitModalStatus, changeSelectUnivModalStatus } = props;

  const navigate = useNavigate();

  function handleBackBtn() {
    changeQuitModalStatus(false);
    changeSelectUnivModalStatus(true);
  }

  return (
    <BackgroundView>
      <ModalView>
        <Advan5Icon />
        <Text>논술메이트가 합격까지 함께할게요!</Text>
        <SubTitleBox>
          <SubTitle>이제 나의 시험장에서 대학별 시험 응시하고,</SubTitle>
          <SubTitle>선생님께 첨삭 받을 답안지를 제출해 보세요.</SubTitle>
        </SubTitleBox>
        <Phrase>논술메이트를 100%로 활용하려면? 이용자 가이드북</Phrase>
        <ModalButtonBox>
          <BackButton type="button" onClick={handleBackBtn}>
            뒤로가기
          </BackButton>
          <ConfirmButton type="button" onClick={() => navigate("/home/test")}>
            나의 시험장으로
          </ConfirmButton>
        </ModalButtonBox>
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
  justify-content: center;
  align-items: center;
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

const Advan5Icon = styled(Advan5Ic)`
  width: 12rem;
  height: 12rem;
  margin-top: 6.2rem;
  margin-bottom: 4rem;
`;

const Text = styled.p`
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline5};
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_800};
`;

const Phrase = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_600};
`;

const ModalButtonBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  height: 4.4rem;
  margin-top: 4rem;
`;

const BackButton = styled(lightBlueButtonStyle)`
  height: 100%;
  padding: 0;
`;

const ConfirmButton = styled(mainButtonStyle)`
  height: 100%;
  padding: 0;
`;
