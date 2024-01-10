import styled from "styled-components";
import { SetUnsetContainerLayout } from "style/layout/SetUnsetLayout";
import { DownArrowBoldIc, SearchIc, UpArrowBoldIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import { useState } from "react";
import { universityLists } from "home/core/universityLists";
import SelectedUniversityToggle from "./components/SelectedUniversityToggle";

export default function HomeTestSet() {
  const [selectedUniversityId, setSelectedUniversityId] = useState<number | null>(null);

  function handleSelectedUniversityId(id: number) {
    setSelectedUniversityId(id);
  }

  return (
    <HomeTestSetContainer>
      <HeaderBox>
        <HeaderText>나의 시험장</HeaderText>
        <HeaderButton type="button">
          대학별 시험 찾기
          <SearchIcon />
        </HeaderButton>
      </HeaderBox>
      <SelectedUniversityLists>
        {universityLists.map((data) => {
          const { universityId, universityName, universityCategory, examList } = data;
          const isSelected = selectedUniversityId === universityId;

          return (
            <div key={universityId}>
              <SelectedUniversityButton
                type="button"
                onClick={() => handleSelectedUniversityId(universityId)}
                $isSelected={isSelected}>
                <UniversityBox>
                  <Name $isSelected={isSelected}>{universityName}</Name>
                  <Category $isSelected={isSelected}>{universityCategory}</Category>
                </UniversityBox>
                {isSelected ? <UpArrowBoldIcon /> : <DownArrowBoldIcon />}
              </SelectedUniversityButton>
              {isSelected && <SelectedUniversityToggle universityId={universityId} examList={examList} />}
            </div>
          );
        })}
      </SelectedUniversityLists>
    </HomeTestSetContainer>
  );
}

const HomeTestSetContainer = styled.section`
  ${SetUnsetContainerLayout};
`;

const HeaderBox = styled.h2`
  ${({ theme }) => theme.fonts.Headline5};

  ${commonFlex};

  justify-content: space-between;
  width: 100%;
  padding: 0 0.8rem;
`;

const HeaderText = styled.h2`
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

const SelectedUniversityLists = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: flex-start;
  width: 100%;
  height: calc(100% - 18.2rem);
  padding: 0;
`;

const SelectedUniversityButton = styled.button<{ $isSelected: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
