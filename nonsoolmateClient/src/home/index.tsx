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
  justify-content: space-between;

  ${commonFlex};

  height: calc(100vh - 6.4rem);
  padding: 0;
`;
