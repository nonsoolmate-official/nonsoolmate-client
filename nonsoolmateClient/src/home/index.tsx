import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 6.4rem);
  padding: 0;
`;
