import { DownArrowBoldIc, SearchIc, UpArrowBoldIc } from "@assets/index";
import { useState } from "react";
import { commonFlex } from "style/commonStyle";
import { SetUnsetContainerLayout } from "style/layout/SetUnsetLayout";
import styled from "styled-components";

import { media } from "style/responsiveStyle";
import { SelectUniversityDataTypes } from "../api/getSelectUniversityExams";
import SelectedUniversityToggle from "../components/SelectedUniversityToggle";

interface HomeTestSetProps {
  handleUniversityModal: (open: boolean) => void;
  response: SelectUniversityDataTypes[];
  dataUniversityIds: number[];
  handleTakeTestModal: () => void;
}

export default function HomeTestSet(props: HomeTestSetProps) {
  const { handleUniversityModal, response, dataUniversityIds, handleTakeTestModal } = props;
  const [selectedUniversityId, setSelectedUniversityId] = useState<number[]>([]);

  function handleSelectedUniversityId(id: number) {
    if (selectedUniversityId.includes(id)) {
      setSelectedUniversityId((prevSelectedIds) => prevSelectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedUniversityId((prevSelectedIds) => [...prevSelectedIds, id]);
    }
  }

  return (
    <Container>
      <Box>
        <HeaderBox>
          <HeaderText>나의 시험장</HeaderText>
          <HeaderButton
            type="button"
            onClick={() => {
              handleUniversityModal(true);
            }}>
            대학별 시험 찾기
            <SearchIcon />
          </HeaderButton>
        </HeaderBox>
        <ListBox>
          {response.map((data, index) => {
            const { collegeId, universityName, collegeName, examList } = data;
            const isSelected = selectedUniversityId.includes(collegeId);
            const isExisted = dataUniversityIds.includes(collegeId);

            return (
              <SelectedListBox key={index}>
                {isExisted && (
                  <SelectedUniversityButton
                    type="button"
                    onClick={() => handleSelectedUniversityId(collegeId)}
                    $isSelected={isSelected}>
                    <UniversityBox>
                      <Name $isSelected={isSelected}>{universityName}</Name>
                      <Category $isSelected={isSelected}>{collegeName}</Category>
                    </UniversityBox>
                    {isSelected ? <UpArrowBoldIcon /> : <DownArrowBoldIcon />}
                  </SelectedUniversityButton>
                )}
                {isSelected && isExisted && (
                  <SelectedUniversityToggle
                    collegeId={collegeId}
                    examList={examList}
                    handleTakeTestModal={handleTakeTestModal}
                  />
                )}
              </SelectedListBox>
            );
          })}
        </ListBox>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  ${SetUnsetContainerLayout};

  scrollbar-width: none;
  flex-grow: 1;
  overflow-y: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6.8rem 21.5rem 4.8rem 2.4rem;

  ${media.tablet} {
    padding: 4rem 3.2rem;
  }
`;

const HeaderBox = styled.header`
  ${({ theme }) => theme.fonts.Headline5};

  ${commonFlex};

  justify-content: space-between;
  width: 100%;
  padding: 0 0.8rem;
`;

const HeaderText = styled.h3`
  ${({ theme }) => theme.fonts.Headline5};
`;

const HeaderButton = styled.button`
  gap: 0.8rem;
  padding: 0.8rem 0 0;
  ${commonFlex};

  ${({ theme }) => theme.fonts.Body5};

  color: ${({ theme }) => theme.colors.grey_700};
`;

const SearchIcon = styled(SearchIc)`
  width: 2rem;
  height: 2rem;
`;

const ListBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

  /* height: calc(100% - 18.2rem); */
  padding: 0;
`;

const SelectedListBox = styled.div`
  padding: 0;
`;

const SelectedUniversityButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1.2rem;
  padding: 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.main_blue : theme.colors.white)};
`;

const UniversityBox = styled.section`
  display: flex;
  gap: 0.6rem;
`;

const Name = styled.p<{ $isSelected: boolean }>`
  ${({ theme }) => theme.fonts.Headline5};

  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.white : theme.colors.grey_700)};
`;

const Category = styled.p<{ $isSelected: boolean }>`
  ${({ theme }) => theme.fonts.Body4};

  padding: 0.2rem 0;
  color: ${({ theme, $isSelected }) => ($isSelected ? theme.colors.white : theme.colors.grey_700)};
`;

const UpArrowBoldIcon = styled(UpArrowBoldIc)`
  width: 2.4rem;
  height: 2.4rem;
`;

const DownArrowBoldIcon = styled(DownArrowBoldIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
