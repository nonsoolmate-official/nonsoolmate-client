import HomeHeader from "home/components/HomeHeader";
import styled from "styled-components";
import MypageSide from "./components/MypageSide";
import MemberInfo from "./components/MemberInfo";

export default function index() {
  return (
    <MypageContainer>
      <HomeHeader />
      <Mypage>
        <MypageSide />
        <MemberInfo />
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
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
