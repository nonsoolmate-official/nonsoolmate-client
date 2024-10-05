import { PrecautionNumOneIc, PrecautionNumThreeIc, PrecautionNumTwoIc } from "@assets/index";
import PRECAUTION_MODAL from "@pages/takeTest/constants/modalConstants";
import { columnFlex, mainButtonStyle } from "style/commonStyle";
import styled, { css } from "styled-components";
import Modal, { ModalContainer } from "./Modal";

interface PrecautionProps {
  changePrecautionStatus: (precautionModal: boolean) => void;
}

export default function PrecautionModal(props: PrecautionProps) {
  const { changePrecautionStatus } = props;
  return (
    <PrecautionModalContainer>
      <Modal>
        <PrecautionModalBox>
          <ModalTitle>주의사항</ModalTitle>
          <ModalDetailBox>
            {PRECAUTION_MODAL.map((item) => {
              return (
                <ModalDetail key={item.title}>
                  {item.index === 1 ? (
                    <PrecautionNumOneIcon />
                  ) : item.index === 2 ? (
                    <PrecautionNumTwoIcon />
                  ) : (
                    <PrecautionNumThreeIcon />
                  )}
                  <DetailContent>
                    <DetailTitle>{item.title}</DetailTitle>
                    <DetailSubText>
                      {item.content[0]}
                      <br />
                      {item.content[1]}
                    </DetailSubText>
                  </DetailContent>
                </ModalDetail>
              );
            })}
          </ModalDetailBox>
          <TestStartButton type="button" onClick={() => changePrecautionStatus(false)}>
            시험 시작
          </TestStartButton>
        </PrecautionModalBox>
      </Modal>
    </PrecautionModalContainer>
  );
}
const PrecautionModalContainer = styled(ModalContainer)`
  ${({ theme }) => theme.effects.dimmed_60};

  backdrop-filter: blur(0.3rem);
`;
const PrecautionModalBox = styled.div`
  ${columnFlex};

  justify-content: space-between;
  width: 65.8rem;
  padding: 3.6rem 5.4rem;
`;
const ModalTitle = styled.h1`
  ${({ theme }) => theme.fonts.Headline4};

  margin-bottom: 2.8rem;
`;
const ModalDetailBox = styled.li`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  justify-content: center;
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
