import styled from "styled-components";
import { commonFlex, mainButtonStyle } from "style/commonStyle";
import { lightBlueButtonStyle } from "style/commonStyle";
import { CheckBtnIc, NotCheckBtnIc } from "@assets/index";
import { useEffect } from "react";
import useGetSelectUniversities from "home/hooks/useGetSelectUniversities";
import Error from "error";
import usePatchSelectUniversities from "home/hooks/usePatchSelectUniversities";
import { client } from "@api/axios";

interface UniversityModalProps {
  handleUniversityModal: (open: boolean) => void;
  selectedUniversityIdList: number[];
  handleSelectedUniversityIdList: (idList: number[]) => void;
  isSelectedNone?: boolean;
  handleMySelectedUniversityIdList: (idList: number[]) => void;
  mySelectedUniversityIdList: number[];
}

export default function UniversityModal(props: UniversityModalProps) {
  const {
    handleUniversityModal,
    selectedUniversityIdList,
    handleSelectedUniversityIdList,
    isSelectedNone,
    handleMySelectedUniversityIdList,
    mySelectedUniversityIdList,
  } = props;

  useEffect(() => {
    handleSelectedUniversityIdList(mySelectedUniversityIdList);
  }, []);

  const mutate = usePatchSelectUniversities();

  function completeSelect() {
    if (isSelectedNone) {
      handleMySelectedUniversityIdList([]);
    } else {
      handleMySelectedUniversityIdList([...selectedUniversityIdList]);
    }

    handleMySelectedUniversityIdList([...selectedUniversityIdList]);

    const sendList = mySelectedUniversityIdList.map((id) => ({ universityId: id }));
    mutate(sendList);

    handleUniversityModal(false);
  }

  function cancel() {
    handleUniversityModal(false);
  }

  function handleUpdateUniversityIdList(universityId: number) {
    const updatedSelectedUniversityIdList = selectedUniversityIdList.includes(universityId)
      ? selectedUniversityIdList.filter((id) => id !== universityId)
      : [...selectedUniversityIdList, universityId];

    handleSelectedUniversityIdList(updatedSelectedUniversityIdList);
  }

  const getSelectUniversitiesResponse = useGetSelectUniversities();
  if (!getSelectUniversitiesResponse) return <Error />;

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
  width: 77.6rem;
  height: 49.6rem;
  padding: 4.8rem 5.5rem 4rem;
  border-radius: 16px;
  background-color: white;
  transform: translate(-50%, -50%);
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
