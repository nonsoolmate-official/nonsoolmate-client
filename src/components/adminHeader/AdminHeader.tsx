import theme from "style/theme";
import styled from "styled-components";

function AdminHeader() {
  return (
    <Header>
      <Ul>
        <Layout>
          <Li>강사 배정</Li>
          <Li>강사 배정</Li>
          <Li>강사 배정</Li>
          <Li>강사 배정</Li>
        </Layout>
        <Li>로그아웃</Li>
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

const Li = styled.li`
  color: ${theme.colors.grey_700};
  ${theme.fonts.Body1};

  white-space: nowrap;
`;

export default AdminHeader;
