import styled from "styled-components";
import { columnFlex, commonFlex } from "style/commonStyle";
import { BorderIc } from "@assets/index";
import SideBarStudyButton from "./SideBarStudyButton";
import SideBarPracticeButton from "./SideBarPracticeButton";
import SideBarTestButton from "./SideBarTestButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomeSide() {
  const navigate = useNavigate();
  const [goTo, setGoTo] = useState<string>("test");

  function handleMoveToHomeStudy() {
    navigate("/home/study");
    setGoTo("study");
  }

  function handleMoveToHomePractice() {
    navigate("/home/practice");
    setGoTo("practice");
  }

  function handleMoveToHomeTest() {
    navigate("/home/test");
    setGoTo("test");
  }

  return (
    <Side>
      <SideHeader>
        <SideHeaderHello>안녕하세요!</SideHeaderHello>
        <SideHeaderBox>
          <SideHeaderId>류가은</SideHeaderId>
          <SideHeaderText>님</SideHeaderText>
        </SideHeaderBox>
      </SideHeader>
      <SideBar>
        <SideBarStudyButton goTo={goTo} handleMoveToHomeStudy={handleMoveToHomeStudy} />
        <BorderIcon />
        <SideBarPracticeButton goTo={goTo} handleMoveToHomePractice={handleMoveToHomePractice} />
        <BorderIcon />
        <SideBarTestButton goTo={goTo} handleMoveToHomeTest={handleMoveToHomeTest} />
      </SideBar>
    </Side>
  );
}

const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
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

const SideHeaderHello = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideHeaderBox = styled.section`
  ${commonFlex};

  justify-content: space-between;
  padding-right: 10rem;
`;

const SideHeaderId = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};

  color: ${({ theme }) => theme.colors.main_blue};
`;

const SideHeaderText = styled.h2`
  ${({ theme }) => theme.fonts.Headline4};
`;

const SideBar = styled.section`
  gap: 0.2rem;
  width: 19.2rem;
`;

const BorderIcon = styled(BorderIc)`
  padding: 0;
`;
