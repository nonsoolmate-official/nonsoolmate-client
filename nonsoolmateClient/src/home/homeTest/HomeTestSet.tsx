import styled from "styled-components";
import { SetUnsetContainerLayout } from "style/layout/SetUnsetLayout";
import { SearchIc, UpArrowBoldIc } from "@assets/index";
import { commonFlex } from "style/commonStyle";
import { useState } from "react";
import { universityLists } from "home/core/universityLists";
import SelectedUniversityToggle from "./components/SelectedUniversityToggle";

export default function HomeTestSet() {
  const [selectedUniversityId, setSelectedUniversityId] = useState<number>(0);

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
          return (
            <div key={universityId}>
              <SelectedUniversityButton type="button" onClick={() => handleSelectedUniversityId(universityId)}>
                <UniversityBox>
                  <Name>{universityName}</Name>
                  <Category>{universityCategory}</Category>
                </UniversityBox>
                <UpArrowBoldIcon />
              </SelectedUniversityButton>
              {selectedUniversityId === universityId && (
                <SelectedUniversityToggle universityId={universityId} examList={examList} />
              )}
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

const SelectedUniversityButton = styled.button`
  display: flex;
  justify-content: space-between;

  /* width: 69.6rem; */
  width: 100%;
  padding: 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.main_blue};
`;

const UniversityBox = styled.section`
  display: flex;
  gap: 0.6rem;
`;

const Name = styled.p`
  ${({ theme }) => theme.fonts.Headline5};

  color: ${({ theme }) => theme.colors.white};
`;

const Category = styled.p`
  ${({ theme }) => theme.fonts.Body4};

  padding: 0.2rem 0;
  color: ${({ theme }) => theme.colors.white};
`;

const UpArrowBoldIcon = styled(UpArrowBoldIc)`
  width: 2.4rem;
  height: 2.4rem;
`;
