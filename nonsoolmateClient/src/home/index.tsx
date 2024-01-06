import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";

export default function index() {
  return (
    <>
      <HomeHeader />
      <HomeSide />
      <Homes>
        <Outlet />
      </Homes>
    </>
  );
}

//padding 좌우만 + 대학 스크롤 기능 + 배경색 light-grey
const Homes = styled.section`
  display: flex;
`;
