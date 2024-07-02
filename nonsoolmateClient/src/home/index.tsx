import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";
import useRefreshPage from "socialLogin/hooks/useRefreshPage";
import { useMediaQuery } from "react-responsive";
import HomeIpadSide from "./components/HomeIpadSide";
import { media } from "style/responsiveStyle";

export default function index() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 768px)" });
  useRefreshPage();

  return (
    <>
      <HomeHeader />
      <Homes>
        {!isIpadSize && <HomeSide />}
        <Outlet />
      </Homes>
      {isIpadSize && <HomeIpadSide />}
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

  ${media.tablet} {
    flex-direction: column;
    height: calc(100vh - 12.8rem);
  }
`;
