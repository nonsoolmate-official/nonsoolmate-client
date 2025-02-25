import { removeToken } from "@pages/socialLogin/utils/token";
import { Link, useLocation } from "react-router-dom";
import theme from "style/theme";
import styled from "styled-components";

function AdminHeader() {
  const location = useLocation();

  const isAssignPage = location.pathname === "/admin/assign" || location.pathname === "/admin";
  const isRequestPage = location.pathname === "/admin/request";
  const isCompletePage = location.pathname === "/admin/complete";
  const isManagePage = location.pathname === "/admin/manage";

  const handleLogout = () => {
    removeToken();
  };

  return (
    <Header>
      <Ul>
        <Layout>
          {/* 라우팅 Path 변경 필요 */}
          <Li $isCurrent={isAssignPage}>
            <Link to="/admin/assign">강사 배정</Link>
          </Li>
          <Li $isCurrent={isRequestPage}>
            <Link to="/admin/request">첨삭 요청</Link>
          </Li>
          <Li $isCurrent={isCompletePage}>
            <Link to="/admin/complete">첨삭 완료</Link>
          </Li>
          <Li $isCurrent={isManagePage}>
            <Link to="/admin/manage">계정 관리</Link>
          </Li>
        </Layout>
        {/* 로그아웃 핸들러 추가 */}
        <Logout role="button" onClick={handleLogout}>
          로그아웃
        </Logout>
      </Ul>
    </Header>
  );
}

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

const Logout = styled.li`
  margin-left: 9rem;
  ${theme.fonts.Body1};

  white-space: nowrap;
  cursor: pointer;

  :hover {
    color: ${theme.colors.dark_blue};
    transition: 0.2s ease-in-out;
  }
`;

export default AdminHeader;
