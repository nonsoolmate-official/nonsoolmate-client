import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import IpadSideBarButton from "./IpadSideBarButton";

export default function HomeIpadSide() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState<string>("test");

  const handleMoveToPage = (page: string) => {
    navigate(`/home/${page}`);
    setCurrentPage(page);
  };

  const handleMoveToMembershipPage = (page: string) => {
    navigate("/membership");
    setCurrentPage(page);
  };

  return (
    <Side>
      <IpadSideBarButton
        currentPage={currentPage}
        handleClick={() => handleMoveToPage("study")}
        pageType="study"
        buttonText="학습하기"
      />
      <IpadSideBarButton
        currentPage={currentPage}
        handleClick={() => handleMoveToPage("practice")}
        pageType="practice"
        buttonText="연습문제"
      />
      <IpadSideBarButton
        currentPage={currentPage}
        handleClick={() => handleMoveToPage("test")}
        pageType="test"
        buttonText="시험보기"
      />
      <IpadSideBarButton
        currentPage={currentPage}
        handleClick={() => handleMoveToMembershipPage("membership")}
        pageType="membership"
        buttonText="멤버십"
      />
    </Side>
  );
}

const Side = styled.aside`
  display: flex;
  justify-content: space-around;
  position: sticky;
  height: 100%;
  padding: 0.6rem 4.8rem;
`;