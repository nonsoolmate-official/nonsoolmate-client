import styled from "styled-components";
import { commonFlex, takeTestModalNextButtonStyle } from "style/commonStyle";

import { media } from "style/responsiveStyle";
import { DisplayIc, EmptyCircleIc, FilledCircleIc, PrintIc, XIc } from "@assets/index";
import { useState } from "react";

interface TakeTestModalProps {
  handleTakeTestModal: () => void;
}

export default function TakeTestModal(props: TakeTestModalProps) {
  const { handleTakeTestModal } = props;

  const [isDisplayClicked, setIsDisplayClicked] = useState<boolean>(false);
  const [isPrintClicked, setIsPrintClicked] = useState<boolean>(false);

  function handleDisplayOption() {
    setIsDisplayClicked((open) => !open);
    setIsPrintClicked(false);
  }

  function handlePrintOption() {
    setIsPrintClicked((open) => !open);
    setIsDisplayClicked(false);
  }

  return (
    <BackgroundView>
      <ModalView>
        <CloseButton onClick={handleTakeTestModal}>
          <XIcon />
        </CloseButton>
        <Text>시험지 어떻게 보실래요?</Text>
        <Container>
          <DisplayOption type="button" onClick={handleDisplayOption} $isDisplayClicked={isDisplayClicked}>
            {isDisplayClicked ? <FilledCircleIcon /> : <EmptyCircleIcon />}
            <OptionBox>
              <OptionText>
                <OptionTitle>논술메이트 화면</OptionTitle>
                <OptionSubtitle>화면으로 바로 볼게요</OptionSubtitle>
              </OptionText>
              <DisplayIcon />
            </OptionBox>
          </DisplayOption>
          <PrintOption type="button" onClick={handlePrintOption} $isPrintClicked={isPrintClicked}>
            {isPrintClicked ? <FilledCircleIcon /> : <EmptyCircleIcon />}
            <OptionBox>
              <OptionText>
                <OptionTitle>인쇄/다운로드</OptionTitle>
                <OptionSubtitle>종이로 준비해서 볼게요</OptionSubtitle>
              </OptionText>
              <PrintIcon />
            </OptionBox>
          </PrintOption>
        </Container>
        <ModalButtonBox>
          <NextButton type="button" $isPrintClicked={isPrintClicked} $isDisplayClicked={isDisplayClicked}>
            다음
          </NextButton>
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

const CloseButton = styled.button`
  display: flex;
  align-items: start;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const XIcon = styled(XIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const Text = styled.p`
  margin-top: 1.6rem;
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline4};
`;

const Container = styled.section`
  display: flex;
  flex-flow: column;
  gap: 1.2rem;
  width: 100%;
  margin-top: 4.4rem;
  margin-bottom: 4.4rem;
`;

const DisplayOption = styled.button<{ $isDisplayClicked: boolean }>`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  width: 100%;
  height: 8.8rem;
  padding: 0 1.6rem;
  border: 1px solid var(--grayscale-gray100, #ecedf0);
  border-color: ${({ theme, $isDisplayClicked }) =>
    $isDisplayClicked ? theme.colors.main_blue : theme.colors.grey_100};
  border-radius: 8px;
`;

const PrintOption = styled.button<{ $isPrintClicked: boolean }>`
  display: flex;
  gap: 2.4rem;
  align-items: center;
  width: 100%;
  height: 8.8rem;
  padding: 0 1.6rem;
  border: 1px solid var(--grayscale-gray100, #ecedf0);
  border-color: ${({ theme, $isPrintClicked }) => ($isPrintClicked ? theme.colors.main_blue : theme.colors.grey_100)};
  border-radius: 8px;
`;

const EmptyCircleIcon = styled(EmptyCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const FilledCircleIcon = styled(FilledCircleIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const OptionBox = styled.div`
  display: flex;
  align-items: center;
`;

const OptionText = styled.div`
  display: flex;
  flex-direction: column;
  width: 21.2rem;
`;

const OptionTitle = styled.p`
  text-align: left;
  ${({ theme }) => theme.fonts.Body1};
  ${({ theme }) => theme.colors.black};
`;

const OptionSubtitle = styled.p`
  text-align: left;
  ${({ theme }) => theme.colors.grey_800};
  ${({ theme }) => theme.fonts.Body6};
`;

const DisplayIcon = styled(DisplayIc)`
  width: 8rem;
  height: 6.4rem;
`;

const PrintIcon = styled(PrintIc)`
  width: 8rem;
  height: 6.4rem;
`;

const ModalButtonBox = styled.section`
  ${commonFlex};

  gap: 1rem;
  height: 4.4rem;
`;

const NextButton = styled(takeTestModalNextButtonStyle)<{ $isDisplayClicked: boolean; $isPrintClicked: boolean }>`
  height: 100%;
  padding: 0.8rem 4rem;
  ${({ theme }) => theme.fonts.Headline5};

  background-color: ${({ theme, $isDisplayClicked, $isPrintClicked }) =>
    $isDisplayClicked || $isPrintClicked ? theme.colors.main_blue : theme.colors.grey_400};
`;
