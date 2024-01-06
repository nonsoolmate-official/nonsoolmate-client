import { useNavigate } from "react-router-dom";
import { SideBarButtonLayout } from "style/layout/SideBarButtonLayout";
import styled from "styled-components";

export default function HomeSide() {
  const navigate = useNavigate();

  function handleMoveToHomePractice() {
    navigate("/home/practice");
  }
  function handleMoveToHomeStudy() {
    navigate("/home/study");
  }
  function handleMoveToHomeTest() {
    navigate("/home/test");
  }
  return (
    <>
      <Side>
        <SideHeader>테스트입니다</SideHeader>
        <SideBar>
          <SideBarStudyButton onClick={handleMoveToHomeStudy}></SideBarStudyButton>
          <SideBarPracticeButton onClick={handleMoveToHomePractice}></SideBarPracticeButton>
          <SideBarTestButton onClick={handleMoveToHomeTest}></SideBarTestButton>
        </SideBar>
      </Side>
    </>
  );
}

const Side = styled.aside`
  display: flex;
`;

const SideHeader = styled.h1`
  display: flex;
`;

const SideBar = styled.section`
  display: flex;
`;

const SideBarStudyButton = styled.button`
  ${SideBarButtonLayout}
`;

const SideBarPracticeButton = styled.button`
  ${SideBarButtonLayout}
`;

const SideBarTestButton = styled.button`
  ${SideBarButtonLayout}
`;
