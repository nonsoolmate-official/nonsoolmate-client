import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";
import { commonFlex } from "style/commonStyle";

export default function index() {
  return (
    <>
      <HomeHeader />
      <Homes>
        <HomeSide />
        <Outlet />
      </Homes>
    </>
  );
}

//padding 좌우만 + 대학 스크롤 기능 + 배경색 light-grey
const Homes = styled.section`
  ${commonFlex};

  justify-content: space-between;
  padding: 0;
`;
