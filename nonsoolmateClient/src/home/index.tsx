import { Outlet } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "./components/HomeHeader";
import HomeSide from "./components/HomeSide";

// outlet이 적응되는대로 주석 얼른 지울겠습니다 ㅠ
// {
//   path: "/home",
//   element: <Home />,
//   children: [
//     { path: "/home/practice", element: <HomePractice /> },
//     { path: "/home/study", element: <HomeStudy /> },
//     { path: "/home/test", element: <HomeTest /> },
//   ],
// }

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
