import styled from "styled-components";
import { commonFlex, mainButtonStyle } from "style/commonStyle";
import { lightBlueButtonStyle } from "style/commonStyle";
import { CheckBtnIc, NotCheckBtnIc } from "@assets/index";
import { useEffect } from "react";
import useGetSelectUniversities from "home/hooks/useGetSelectUniversities";
import usePatchSelectUniversities from "home/hooks/usePatchSelectUniversities";
import { media } from "style/responsiveStyle";
interface UniversityModalProps {
  handleUniversityModal: (open: boolean) => void;
  selectedUniversityIdList: number[];
  handleSelectedUniversityIdList: (idList: number[]) => void;
  isSelectedNone?: boolean;
  handleMySelectedUniversityIdList: (idList: number[]) => void;
  mySelectedUniversityIdList: number[];
  dataUniversityIds: number[];
}

export default function UniversityModal(props: UniversityModalProps) {
  const {
    handleUniversityModal,
    selectedUniversityIdList,
    handleSelectedUniversityIdList,
    isSelectedNone,
    handleMySelectedUniversityIdList,
    dataUniversityIds,
  } = props;

  const mutate = usePatchSelectUniversities();

  useEffect(() => {
    handleSelectedUniversityIdList(dataUniversityIds);
  }, []);

  useEffect(() => {
    if (isSelectedNone) {
      handleMySelectedUniversityIdList([]);
    }
  }, [selectedUniversityIdList]);

  function completeSelect() {
    const modalList = selectedUniversityIdList.map((id) => ({ universityId: id }));
    localStorage.setItem("backList", JSON.stringify(selectedUniversityIdList));
    mutate(modalList);
    handleUniversityModal(false);
    handleMySelectedUniversityIdList([...selectedUniversityIdList]);
  }

  function cancel() {
    //localstorage에 저장된 리스트 불러오기 + 타입에 맞게 파싱작업
    const savedData = localStorage.getItem("backList");
    const parsedData = savedData ? JSON.parse(savedData) : [];
    handleSelectedUniversityIdList(parsedData);
    handleUniversityModal(false);
  }

  function handleUpdateUniversityIdList(universityId: number) {
    const updatedSelectedUniversityIdList = selectedUniversityIdList.includes(universityId)
      ? selectedUniversityIdList.filter((id) => id !== universityId)
      : [...selectedUniversityIdList, universityId];

    handleSelectedUniversityIdList(updatedSelectedUniversityIdList);
  }

  const getSelectUniversitiesResponse = useGetSelectUniversities();
  if (!getSelectUniversitiesResponse) return <></>;

  return (
    <BackgroundView>
      <ModalView>
        <Text>대학 선택</Text>
        <Container>
          {getSelectUniversitiesResponse.data.map((data) => {
            const { universityName, collegeName, universityId } = data;
            const isChecked = selectedUniversityIdList.includes(universityId);

            return (
              <CheckBoxButton
                key={universityId}
                type="button"
                $isChecked={isChecked}
                onClick={() => handleUpdateUniversityIdList(universityId)}>
                <UniversityBox>
                  <University>{universityName}</University>
                  <Category>{collegeName}</Category>
                </UniversityBox>
                <CheckBox>{isChecked ? <CheckBtnIcon /> : <NotCheckBtnIcon />}</CheckBox>
              </CheckBoxButton>
            );
          })}
        </Container>
        <ModalButtonBox>
          <CancelButton type="button" onClick={cancel}>
            취소
          </CancelButton>
          <FinishSelectButton type="button" onClick={completeSelect}>
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
  ${({ theme }) => theme.effects.modal_shadow};

  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 77.4rem;
  height: 49.6rem;
  padding: 4.8rem 5.5rem 4rem;
  border-radius: 16px;
  background-color: white;
  transform: translate(-50%, -50%);

  ${media.tablet} {
    width: 55rem;
    height: 49.6rem;
    padding: 4.8rem 5.4rem 3.2rem;
  }
`;

const Text = styled.p`
  ${({ theme }) => theme.fonts.Headline4};

  padding: 0;
`;

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem 0.4rem;
  width: 100%;
  margin-top: 2.4rem;
  margin-bottom: 22.4rem;

  ${media.tablet} {
    margin-bottom: 17.6rem;
  }
`;

const CheckBoxButton = styled.button<{ $isChecked: boolean }>`
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

const CheckBox = styled.div`
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
