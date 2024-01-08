import styled, { css } from "styled-components";
import Modal, { ModalContainer } from "./Modal";
import { columnFlex, mainButtonStyle } from "style/commonStyle";
import { PrecautionNumOneIc, PrecautionNumThreeIc, PrecautionNumTwoIc } from "@assets/index";

export default function PrecautionModal() {
  return (
    <PrecautionModalContainer>
      <Modal>
        <PrecautionModalBox>
          <ModalTitle>주의사항</ModalTitle>
          <ModalDetailBox>
            <ModalDetail>
              <PrecautionNumOneIcon />
              <DetailContent>
                <DetailTitle>원고지 준비</DetailTitle>
                <DetailSubText>
                  논술메이트의 첨삭은 이미지 파일을 통해 이루어집니다.
                  <br />
                  답안지를 촬영/스캔해 이미지로 제출할 수 있도록 원고지를 준비해주세요.
                </DetailSubText>
              </DetailContent>
            </ModalDetail>
            <ModalDetail>
              <PrecautionNumTwoIcon />
              <DetailContent>
                <DetailTitle>제한시간 엄수</DetailTitle>
                <DetailSubText>
                  시험 시작 버튼 클릭과 동시에 타이머가 시작됩니다.
                  <br />
                  타이머가 끝나면 시험지를 더 이상 볼 수 없으니 시간 안배에 주의하세요.
                </DetailSubText>
              </DetailContent>
            </ModalDetail>
            <ModalDetail>
              <PrecautionNumThreeIcon />
              <DetailContent>
                <DetailTitle>이미지 파일 제출</DetailTitle>
                <DetailSubText>
                  시험이 종료되면 상단 타이머가 멈추고 답안지 파일 제출 창이 나타납니다.
                  <br />
                  파일 제출 시간은 시험 시간에 포함되지 않으니 끝까지 시험에 집중해 주세요.
                </DetailSubText>
              </DetailContent>
            </ModalDetail>
          </ModalDetailBox>
          <TestStartButton type="button">시험 시작</TestStartButton>
        </PrecautionModalBox>
      </Modal>
    </PrecautionModalContainer>
  );
}
const PrecautionModalContainer = styled(ModalContainer)`
  background-color: ${({ theme }) => theme.effects.dimmed_60};
`;
const PrecautionModalBox = styled.div`
  ${columnFlex};

  justify-content: space-between;
  padding: 3.6rem 5.4rem;
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};

  margin-bottom: 2.8rem;
`;
const ModalDetailBox = styled.li`
  ${columnFlex};

  gap: 2.8rem;
  padding: 3.2rem 4.3rem;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.grey_100};
`;
const ModalDetail = styled.ol`
  display: flex;
  gap: 1.2rem;
  list-style: none;
`;
const IconStyle = css`
  width: 1.8rem;
  height: 1.8rem;
  margin-top: 0.3rem;
`;
const PrecautionNumOneIcon = styled(PrecautionNumOneIc)`
  ${IconStyle};
`;
const PrecautionNumTwoIcon = styled(PrecautionNumTwoIc)`
  ${IconStyle};
`;
const PrecautionNumThreeIcon = styled(PrecautionNumThreeIc)`
  ${IconStyle};
`;

const DetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;
const DetailTitle = styled.p`
  ${({ theme }) => theme.fonts.Body3};
`;
const DetailSubText = styled.p`
  ${({ theme }) => theme.fonts.Body6};
`;
const TestStartButton = styled(mainButtonStyle)`
  margin-top: 2.4rem;
  padding: 0.8rem 4rem;
`;
