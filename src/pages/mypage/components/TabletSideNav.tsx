import MemberInfo from "@pages/mypage/components/MemberInfo";
import MembershipInfo from "@pages/mypage/components/MembershipInfo";
import Mentor from "@pages/mypage/components/Mentor";
import { Menu } from "@pages/mypage/types/menu";
import styled from "styled-components";

interface TabletSideNavProps {
  menu: Menu;
  setMenu: (menu: Menu) => void;
}

export default function TabletSideNav({ menu, setMenu }: TabletSideNavProps) {
  return (
    <>
      <Nav>
        <Sidebar>
          <MenuList onClick={() => setMenu("회원 정보")} $isActive={menu === "회원 정보"}>
            회원 정보
          </MenuList>
          <MenuList onClick={() => setMenu("멤버십 관리")} $isActive={menu === "멤버십 관리"}>
            멤버십 관리
          </MenuList>
          <MenuList onClick={() => setMenu("담당 선생님")} $isActive={menu === "담당 선생님"}>
            담당 선생님
          </MenuList>
        </Sidebar>
      </Nav>
      <ContentWrapper>
        {menu === "회원 정보" && <MemberInfo />}
        {menu === "멤버십 관리" && <MembershipInfo />}
        {menu === "담당 선생님" && <Mentor />}
      </ContentWrapper>
    </>
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0 3.2rem;
`;

const Sidebar = styled.ul`
  display: flex;
  gap: 4rem;
  width: 100%;
  margin-top: 2.8rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};
`;

const MenuList = styled.li<{ $isActive: boolean }>`
  padding: 0 0 0.5rem;
  border: none;
  border-bottom: ${({ $isActive }) => ($isActive ? "1px solid black" : "none")};
  color: ${({ theme, $isActive }) => ($isActive ? theme.colors.black : theme.colors.grey_400)};
  ${({ theme }) => theme.fonts.Body5};

  list-style: none;
  cursor: pointer;
`;

const ContentWrapper = styled.section`
  margin-left: 0.8rem;
`;
