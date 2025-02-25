import { removeToken } from "@pages/socialLogin/utils/token";
import { Link, useLocation } from "react-router-dom";
import theme from "style/theme";
import styled from "styled-components";

interface AdminHeaderProps {
  type?: "admin" | "teacher";
}

const AdminHeader = ({ type = "admin" }: AdminHeaderProps) => {
  const location = useLocation();

  const handleHeaderItems = () => {
    if (type === "admin") {
      return [
        { path: "/admin/assign", title: "강사 배정" },
        { path: "/admin/request", title: "첨삭 요청" },
        { path: "/admin/complete", title: "첨삭 완료" },
        { path: "/admin/manage", title: "계정 관리" },
      ];
    } else if (type === "teacher") {
      return [
        { path: "/admin/teacher-request", title: "첨삭 요청" },
        { path: "/admin/teacher-complete", title: "첨삭 완료" },
      ];
    }
    return [];
  };

  const handleLogout = () => {
    removeToken();
  };

  return (
    <Header>
      <Ul>
        <Layout>
          {handleHeaderItems().map((item) => (
            <Li key={item.path} $isCurrent={location.pathname === item.path}>
              <Link to={item.path}>{item.title}</Link>
            </Li>
          ))}
        </Layout>
        <Logout role="button" onClick={handleLogout}>
          로그아웃
        </Logout>
      </Ul>
    </Header>
  );
};

const Header = styled.header`
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 7rem;
  padding: 2.1rem 21.5rem;
  border-bottom: 1px solid ${theme.colors.grey_300};
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Layout = styled.div`
  display: flex;
  gap: 9rem;
`;

const Li = styled.li<{ $isCurrent?: boolean }>`
  color: ${({ $isCurrent, theme }) => ($isCurrent ? theme.colors.dark_blue : theme.colors.grey_700)};
  ${theme.fonts.Body1};

  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: ${theme.colors.dark_blue};
    transition: 0.2s ease-in-out;
  }
`;

const Logout = styled(Li)`
  margin-left: 9rem;
  color: ${theme.colors.black};

  &:hover {
    color: ${theme.colors.dark_blue};
    transition: 0.2s ease-in-out;
  }
`;

export default AdminHeader;
