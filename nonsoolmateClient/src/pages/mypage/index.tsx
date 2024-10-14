import HomeIpadSide from "@pages/home/components/HomeIpadSide";
import MembershipInfo from "@pages/mypage/components/MembershipInfo";
import Mentor from "@pages/mypage/components/Mentor";
import TabletSideNav from "@pages/mypage/components/TabletSideNav";
import { Menu } from "@pages/mypage/types/menu";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import HomeHeader from "../home/components/HomeHeader";
import MemberInfo from "./components/MemberInfo";
import SideNav from "./components/SideNav";

export default function Index() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });

  const [menu, setMenu] = useState<Menu>("회원 정보");

  return (
    <MypageContainer>
      <HomeHeader />
      <Mypage>
        {!isIpadSize && <SideNav menu={menu} setMenu={setMenu} />}
        {isIpadSize && <TabletSideNav menu={menu} setMenu={setMenu} />}

        {!isIpadSize && <>{menu === "회원 정보" && <MemberInfo />}</>}
        {!isIpadSize && <>{menu === "멤버십 관리" && <MembershipInfo />}</>}
        {!isIpadSize && <>{menu === "담당 선생님" && <Mentor />}</>}
      </Mypage>
      {isIpadSize && <HomeIpadSide />}
    </MypageContainer>
  );
}

const MypageContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Mypage = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.grey_50};

  ${media.tablet} {
    flex-direction: column;
  }
`;
