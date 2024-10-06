import MembershipInfo from "@pages/mypage/components/MembershipInfo";
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
      </Mypage>
    </MypageContainer>
  );
}

const MypageContainer = styled.section`
  display: flex;

  width: 100%;
  height: 100vh;

  flex-direction: column;
`;

const Mypage = styled.div`
  display: flex;

  width: 100%;
  height: 100vh;

  ${media.tablet} {
    flex-direction: column;
  }
`;