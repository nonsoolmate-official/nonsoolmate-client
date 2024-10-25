import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import useRefreshPage from "../socialLogin/hooks/useRefreshPage";
import HomeHeader from "./components/HomeHeader";
import HomeIpadSide from "./components/HomeIpadSide";
import HomeSide from "./components/HomeSide";

export default function index() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });
  useRefreshPage();

  return (
    <Wrapper>
      <HomeHeader />
      <Homes>
        {!isIpadSize && <HomeSide />}
        <Outlet />
      </Homes>
      {isIpadSize && <HomeIpadSide />}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Homes = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: inherit;

  /* height: calc(100vh - 6.4rem); */
  padding: 0;

  ${media.tablet} {
    flex-direction: column;

    /* height: calc(100vh - 12.8rem); */
  }
`;
