import { CheckBtnIc, CheckEmptyIc, Univ4Ic } from "@assets/index";
import { TargetUnivResponse } from "@pages/payment/api/getTargetUniv";
import { PatchDataTypes } from "@pages/payment/api/patchTargetUniv";
import useGetTargetUniv from "@pages/payment/hooks/useGetTargetUniv";
import usePatchTargetUniv from "@pages/payment/hooks/usePatchTargetUniv";
import { useEffect, useState } from "react";
import { lightBlueButtonStyle, mainButtonStyle } from "style/commonStyle";
import { media } from "style/responsiveStyle";
import styled from "styled-components";

interface ModalProps {
  changeSelectUnivModalStatus: (open: boolean) => void;
  changeRandomMatchModalStatus: (open: boolean) => void;
  changeQuitModalStatus: (open: boolean) => void;
}

export default function SelectUnivModal(props: ModalProps) {
  const { changeSelectUnivModalStatus, changeRandomMatchModalStatus, changeQuitModalStatus } = props;

  const [checkedUnivs, setCheckedUnivs] = useState<number[]>([]);
  const [isCheckedNone, setIsCheckedNone] = useState(false);
  const [isOverSix, setIsOverSix] = useState(false);

  const { data: TARGETS } = useGetTargetUniv();
  const patchMutate = usePatchTargetUniv();

  useEffect(() => {
    const storedUnivs = sessionStorage.getItem("targetUnivs");
    if (storedUnivs) {
      setCheckedUnivs(JSON.parse(storedUnivs));
    }
  }, []);

  useEffect(() => {
    if (checkedUnivs.length > 0) {
      sessionStorage.setItem("targetUnivs", JSON.stringify(checkedUnivs));
    }
  }, [checkedUnivs]);

  if (!TARGETS) {
    return <></>;
  }

  const handleCheck = (id: number) => {
    setIsCheckedNone(false);
    setIsOverSix(false);
    if (checkedUnivs.includes(id)) {
      setCheckedUnivs(checkedUnivs.filter((univId) => univId !== id));
    } else {
      if (checkedUnivs.length < 6) {
        setCheckedUnivs([...checkedUnivs, id]);
      } else {
        setIsOverSix(true);
      }
    }
  };

  function changeRandomModalStatus() {
    changeSelectUnivModalStatus(false);
    changeRandomMatchModalStatus(true);
  }

  function handleFinishSelect() {
    if (checkedUnivs.length === 0) {
      setIsCheckedNone(true);
    } else {
      const dataToPatch: PatchDataTypes[] = checkedUnivs.map((id) => ({
        universityId: id,
      }));
      patchMutate(dataToPatch);
      changeSelectUnivModalStatus(false);
      changeQuitModalStatus(true);
    }
  }

  return (
    <BackgroundView>
      <ModalView>
        <Text>첨삭 선생님을 배정해드릴게요</Text>
        <SubTitle>
          합격 이력이 가장 많이 일치하는 선생님을 영업일 기준 1일 이내에 배정해 드릴게요. 학생의 목표 대학을
          선택해주세요. <RedText>(최대 6개)</RedText>
        </SubTitle>
        {isCheckedNone && <RedText>* 목표 대학을 1개 이상 선택해주세요.</RedText>}
        {isOverSix && <RedText>* 최대 6개만 선택이 가능합니다.</RedText>}
        <Container>
          {TARGETS.map((data: TargetUnivResponse) => {
            const { universityId, universityName } = data;
            const isChecked = checkedUnivs.includes(universityId);

            return (
              <CheckBoxButton
                key={universityId}
                type="button"
                $isChecked={isChecked}
                onClick={() => handleCheck(universityId)}>
                <UniversityBox>
                  <Image as={Univ4Ic} />
                  <University>{universityName}</University>
                </UniversityBox>
                <CheckBox>{isChecked ? <CheckBtnIcon /> : <CheckEmptyIcon />}</CheckBox>
              </CheckBoxButton>
            );
          })}
        </Container>
        <ModalButtonBox>
          <RandomButton type="button" onClick={changeRandomModalStatus}>
            임의로 배정받기
          </RandomButton>
          <FinishSelectButton type="button" onClick={handleFinishSelect}>
            선택완료
          </FinishSelectButton>
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
  margin-top: 1.6rem;
  margin-bottom: 2.8rem;
  padding: 0;
  text-align: center;
  ${({ theme }) => theme.fonts.Headline4};
`;

const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.Body6};

  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.grey_800};
`;

const RedText = styled.span`
  ${({ theme }) => theme.fonts.Body6};

  color: ${({ theme }) => theme.colors.error};
`;

const Container = styled.section`
  display: grid;
  flex-wrap: wrap;
  gap: 1.4rem 1.2rem;
  width: 100%;
  margin-top: 2rem;
  margin-bottom: 4.4rem;
  grid-template-columns: repeat(2, 1fr);
`;

const CheckBoxButton = styled.button<{ $isChecked: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  padding: 0.8rem;
  border: 1px solid ${({ theme, $isChecked }) => ($isChecked ? theme.colors.main_blue : theme.colors.grey_200)};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.grey_800};
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

const Image = styled.svg`
  object-fit: cover;
  width: 2.4rem;
  height: 2.4rem;
`;

const University = styled.p`
  ${({ theme }) => theme.fonts.Body6};
`;

const CheckBtnIcon = styled(CheckBtnIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const CheckEmptyIcon = styled(CheckEmptyIc)`
  width: 1.6rem;
  height: 1.6rem;
`;

const ModalButtonBox = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  height: 4.4rem;
`;

const RandomButton = styled(lightBlueButtonStyle)`
  height: 100%;
  padding: 0;
`;

const FinishSelectButton = styled(mainButtonStyle)`
  height: 100%;
  padding: 0;
`;
