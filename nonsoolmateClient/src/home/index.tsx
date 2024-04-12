import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";

export default function index() {
  useRefreshPage();
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

const Homes = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: calc(100vh - 6.4rem);
  padding: 0;
`;
