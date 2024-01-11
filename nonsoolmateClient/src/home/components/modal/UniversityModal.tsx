import styled from "styled-components";
import { commonFlex, mainButtonStyle } from "style/commonStyle";
import { lightBlueButtonStyle } from "style/commonStyle";
import { selectionLists } from "home/core/selectionLists";
import { CheckBtnIc, NotCheckBtnIc } from "@assets/index";

interface UniversityModalProps {
  handleUniversityModal: (open: boolean) => void;
  selectedUniversityIds: number[];
  handleSelectedUniversityIds: (IDs: number[]) => void;
}

export default function UniversityModal(props: UniversityModalProps) {
  const { handleUniversityModal, selectedUniversityIds, handleSelectedUniversityIds } = props;

  function handleUniversityClick(universityId: number) {
    const updatedSelectedUniversityIds = selectedUniversityIds.includes(universityId)
      ? selectedUniversityIds.filter((id) => id !== universityId)
      : [...selectedUniversityIds, universityId];

    handleSelectedUniversityIds(updatedSelectedUniversityIds);
  }
  return (
    <BackgroundView>
      <ModalView>
        <Text>대학 선택</Text>
        <Container>
          {selectionLists.map((data) => {
            const { universityName, universityCategory, universityId } = data;
            const isChecked = selectedUniversityIds.includes(universityId);
            return (
              <CheckBox key={universityName} $isChecked={isChecked}>
                <UniversityBox>
                  <University>{universityName}</University>
                  <Category>{universityCategory}</Category>
                </UniversityBox>
                <CheckBoxButton type="button" onClick={() => handleUniversityClick(universityId)}>
                  {isChecked ? <CheckBtnIcon /> : <NotCheckBtnIcon />}
                </CheckBoxButton>
              </CheckBox>
            );
          })}
        </Container>
        <ModalButtonBox>
          <CancelButton
            onClick={() => {
              handleUniversityModal(false);
            }}>
            취소
          </CancelButton>
          <FinishSelectButton
            onClick={() => {
              // console.log(selectedUniversityIds);
              handleUniversityModal(false);
            }}>
            선택완료
          </FinishSelectButton>
        </ModalButtonBox>
      </ModalView>
    </BackgroundView>
  );
}
const BackgroundView = styled.section`
  position: fixed;
  inset: 0;
  ${({ theme }) => theme.effects.dimmed_40};

  backdrop-filter: blur(0.3rem);
`;

const ModalView = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 77.6rem;
  height: 49.6rem;
  padding: 4.8rem 5.5rem 4rem;
  border-radius: 16px;
  background-color: white;

  ${({ theme }) => theme.effects.modal_shadow};

  transform: translate(-50%, -50%);
`;

const Text = styled.p`
  padding: 0;
  ${({ theme }) => theme.fonts.Headline4};
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.4rem;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 22.4rem;
`;

const CheckBox = styled.div<{ $isChecked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  width: 21.8rem;
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  background-color: ${({ theme, $isChecked }) => ($isChecked ? theme.colors.light_blue : theme.colors.grey_100)};
  color: ${({ theme, $isChecked }) => ($isChecked ? theme.colors.main_blue : theme.colors.grey_400)};
`;

const UniversityBox = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
`;

const CheckBoxButton = styled.button`
  padding: 0;
  cursor: pointer;
`;

const University = styled.p`
  ${({ theme }) => theme.fonts.Body3};
`;

const Category = styled.div`
  ${({ theme }) => theme.fonts.Body8};

  padding: 0.4rem 0;
`;

const CheckBtnIcon = styled(CheckBtnIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const NotCheckBtnIcon = styled(NotCheckBtnIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const ModalButtonBox = styled.section`
  ${commonFlex};

  gap: 1rem;
  height: 4.4rem;
`;

const CancelButton = styled(lightBlueButtonStyle)`
  width: 16rem;
  height: 100%;
  padding: 0;
`;

const FinishSelectButton = styled(mainButtonStyle)`
  width: 16rem;
  height: 100%;
  padding: 0;
`;
