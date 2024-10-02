import { Menu } from "@pages/mypage/types/menu";
import styled from "styled-components";

interface SideNavProps {
  menu: Menu;
  setMenu: (menu: Menu) => void;
}

export default function SideNav({ menu, setMenu }: SideNavProps) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, menu: Menu) => {
    if (e.key === "Enter") {
      setMenu(menu);
    }
  };

  return (
    <nav>
      <Ul>
        <NavHeader>마이페이지</NavHeader>
        <MenuList
          role="button"
          tabIndex={0}
          onClick={() => setMenu("회원 정보")}
          onKeyDown={(e) => handleKeyDown(e, "회원 정보")}
          $isActive={menu === "회원 정보"}>
          회원 정보
        </MenuList>
        <MenuList
          role="button"
          tabIndex={0}
          onClick={() => setMenu("멤버십 관리")}
          onKeyDown={(e) => handleKeyDown(e, "멤버십 관리")}
          $isActive={menu === "멤버십 관리"}>
          멤버십 관리
        </MenuList>
        <MenuList
          role="button"
          tabIndex={0}
          onClick={() => setMenu("담당 선생님")}
          onKeyDown={(e) => handleKeyDown(e, "담당 선생님")}
          $isActive={menu === "담당 선생님"}>
          담당 선생님
        </MenuList>
      </Ul>
    </nav>
  );
}

const Ul = styled.ul`
  display: flex;
  position: sticky;

  width: 43.1rem;
  height: 100%;

  flex-shrink: 0;
  flex-direction: column;

  justify-content: flex-start;

  gap: 2rem;

  padding: 2.4rem 2.4rem 0 21.5rem;

  border-right: 1px solid ${({ theme }) => theme.colors.grey_100};

  background-color: ${({ theme }) => theme.colors.white};

  overflow: hidden;
`;

const NavHeader = styled.header`
  ${({ theme }) => theme.fonts.Headline4};
`;

const MenuList = styled.li<{ $isActive: boolean }>`
  padding: 0.8rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.grey_200};

  color: ${({ $isActive, theme }) => ($isActive ? theme.colors.main_blue : theme.colors.grey_400)};
  ${({ theme }) => theme.fonts.Body3};

  list-style: none;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.main_blue};

    transition: color 0.5s ease-in-out;
  }
`;
