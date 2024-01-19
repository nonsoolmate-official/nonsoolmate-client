import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";
import { ErrorHandler } from "@api/ErrorHandler";

export default function index() {
  return (
    <>
      <ErrorHandler>
        <HomeHeader />
        <Homes>
          <HomeSide />
          <Outlet />
        </Homes>
      </ErrorHandler>
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
