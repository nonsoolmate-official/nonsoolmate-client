import { BorderIc } from "@assets/index";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import useGetName from "../hooks/useGetName";
import SideBarPracticeButton from "./SideBarPracticeButton";
import SideBarStudyButton from "./SideBarStudyButton";
import SideBarTestButton from "./SideBarTestButton";

export default function HomeSide() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>(() => {
    return localStorage.getItem("currentPage") || "test";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage]);

  const getNameResponse = useGetName();
  if (!getNameResponse) return <></>;

  const {
    data: { memberName },
  } = getNameResponse;

  function handleMoveToHomeStudy() {
    navigate("/home/study");
    setCurrentPage("study");
  }

  function handleMoveToHomePractice() {
    navigate("/home/practice");
    setCurrentPage("practice");
  }

  function handleMoveToHomeTest() {
    navigate("/home/test");
    setCurrentPage("test");
  }

  return (
    getNameResponse && (
      <Side>
        <SideHeader>
          <SideHeaderHello>안녕하세요!</SideHeaderHello>
          <SideHeaderBox>
            <SideHeaderName>{memberName}</SideHeaderName>
            <SideHeaderText>님</SideHeaderText>
          </SideHeaderBox>
        </SideHeader>
        <SideBar>
          <SideBarStudyButton currentPage={currentPage} handleMoveToHomeStudy={handleMoveToHomeStudy} />
          <BorderIcon />
          <SideBarPracticeButton currentPage={currentPage} handleMoveToHomePractice={handleMoveToHomePractice} />
          <BorderIcon />
          <SideBarTestButton currentPage={currentPage} handleMoveToHomeTest={handleMoveToHomeTest} />
        </SideBar>
      </Side>
    )
  );
}

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  position: sticky;
  width: 43.1rem;
  height: 100%;
  padding: 2.4rem 2.4rem 0 21.5rem;
`;

const SideHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 19.2rem;
`;

const SideHeaderHello = styled.h4`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideHeaderBox = styled.section`
  display: flex;
  gap: 0.3rem;
  align-items: center;
`;

const SideHeaderName = styled.h4`
  ${({ theme }) => theme.fonts.Headline4};

  color: ${({ theme }) => theme.colors.main_blue};
`;

const SideHeaderText = styled.h4`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideBar = styled.section`
  gap: 0.2rem;
  width: 19.2rem;
`;

const BorderIcon = styled(BorderIc)`
  padding: 0;
`;
