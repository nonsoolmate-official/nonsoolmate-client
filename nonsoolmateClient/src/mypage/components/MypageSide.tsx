import styled from "styled-components";

export default function MypageSide() {
  return (
    <Side>
      <SideHeader>내 정보</SideHeader>
      <SideBarMenu>회원 정보</SideBarMenu>
    </Side>
  );
}
const Side = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: flex-start;
  flex-shrink: 0;
  overflow: hidden;
  position: sticky;
  width: 43.1rem;
  height: 100%;
  padding: 2.4rem 2.4rem 0 21.5rem;
  border-right: 1px solid ${({ theme }) => theme.colors.grey_100};
`;
const SideHeader = styled.h4`
  ${({ theme }) => theme.fonts.Headline4};
`;
const SideBarMenu = styled.div`
  ${({ theme }) => theme.fonts.Body3};

  padding: 0 0.8rem;
`;
