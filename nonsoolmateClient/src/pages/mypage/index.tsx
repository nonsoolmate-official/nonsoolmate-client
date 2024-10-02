import { Menu } from "@pages/mypage/types/menu";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";
import styled from "styled-components";
import HomeHeader from "../home/components/HomeHeader";
import IpadMypageSide from "./components/IpadMypageSide";
import MemberInfo from "./components/MemberInfo";
import SideNav from "./components/SideNav";

export default function Index() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });
  const [menu, setMenu] = useState<Menu>("회원 정보");
  const [isClicked, setIsClicked] = useState<number>(1);

  function handleInfo() {
    setMenu("회원 정보");
    setIsClicked(1);
  }

  function handleSecond() {
    setMenu("멤버십 관리");
    setIsClicked(2);
  }

  function handleThird() {
    setMenu("담당 선생님");
    setIsClicked(3);
  }

  return (
    <MypageContainer>
      <HomeHeader />
      <Mypage>
        {!isIpadSize && <SideNav menu={menu} setMenu={setMenu} />}
        {isIpadSize && (
          <IpadMypageSide
            isClicked={isClicked}
            handleInfo={handleInfo}
            handleSecond={handleSecond}
            handleThird={handleThird}
          />
        )}
        {!isIpadSize && <>{menu === "회원 정보" && <MemberInfo />}</>}
      </Mypage>
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

  ${media.tablet} {
    flex-direction: column;
  }
`;
