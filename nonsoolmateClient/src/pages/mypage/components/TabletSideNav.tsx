import { Menu } from "@pages/mypage/types/menu";
import styled from "styled-components";

interface TabletSideNavProps {
  menu: Menu;
  setMenu: (menu: Menu) => void;
}

export default function TabletSideNav({ menu, setMenu }: TabletSideNavProps) {
  return (
    <Nav>
      <Header>마이페이지</Header>
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
  );
}

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 0 3.2rem;
`;

const Header = styled.h2`
  margin: 3.2rem 0 2.4rem;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.Headline5};
`;

const Sidebar = styled.ul`
  display: flex;
  gap: 4rem;
  width: 100%;
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
