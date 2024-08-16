import HomeHeader from "home/components/HomeHeader";
import styled from "styled-components";
import MypageSide from "./components/MypageSide";
import MemberInfo from "./components/MemberInfo";
import { useMediaQuery } from "react-responsive";
import { media } from "style/responsiveStyle";
import IpadMypageSide from "./components/IpadMypageSide";
import { useState } from "react";

export default function index() {
  const isIpadSize = useMediaQuery({ query: "(max-width: 1024px)" });
  const [isClicked, setIsClicked] = useState<number>(1);

  function handleInfo() {
    setIsClicked(1);
  }

  function handleSecond() {
    setIsClicked(2);
  }

  function handleThird() {
    setIsClicked(3);
  }

  return (
    <MypageContainer>
      <HomeHeader />
      <Mypage>
        {!isIpadSize && <MypageSide />}
        {isIpadSize && (
          <IpadMypageSide
            isClicked={isClicked}
            handleInfo={handleInfo}
            handleSecond={handleSecond}
            handleThird={handleThird}
          />
        )}
        {(!isIpadSize || isClicked === 1) && <MemberInfo />}
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
