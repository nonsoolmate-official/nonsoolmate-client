import { media } from "style/responsiveStyle";
import styled from "styled-components";
import RandomMatchImg from "@assets/image/randomMatchImg.png";
import { lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";

interface ModalProps {
  changeSelectUnivModalStatus: (open: boolean) => void;
  changeRandomMatchModalStatus: (open: boolean) => void;
  changeQuitModalStatus: (open: boolean) => void;
}

export default function RandomMatchModal(props: ModalProps) {
  const { changeSelectUnivModalStatus, changeRandomMatchModalStatus, changeQuitModalStatus } = props;

  function handleBackBtn() {
    changeRandomMatchModalStatus(false);
    changeSelectUnivModalStatus(true);
  }

  function handleConfirmBtn() {
    changeRandomMatchModalStatus(false);
    changeQuitModalStatus(true);
  }

  return (
    <BackgroundView>
      <ModalView>
        <Text>임의로 배정받으면 목표 대학</Text>
        <Text>맞춤형 첨삭을 받기 어려울 수 있어요</Text>
        <SubTitleBox>
          <SubTitle>논술메이트는 목표 대학에 맞추어 선생님을 배정해 드려요.</SubTitle>
          <SubTitle>목표 대학을 선택하면 더 맞는 선생님께 첨삭을 받을 수 있어요.</SubTitle>
        </SubTitleBox>
        <Image src={RandomMatchImg} alt="랜덤매칭 모달이미지" />
        <ModalButtonBox>
          <BackButton type="button" onClick={handleBackBtn}>
            뒤로가기
          </BackButton>
          <ConfirmButton type="button" onClick={handleConfirmBtn}>
            확인했어요
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
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline5};
`;

const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.6rem;
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.grey_800};
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  padding: 4rem 0;
  object-fit: fill;
`;

const ModalButtonBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  height: 4.4rem;
`;

const BackButton = styled(lightBlueButtonStyle)`
  height: 100%;
  padding: 0;
`;

const ConfirmButton = styled(mainButtonStyle)`
  height: 100%;
  padding: 0;
`;
