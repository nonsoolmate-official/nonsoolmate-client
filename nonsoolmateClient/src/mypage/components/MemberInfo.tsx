import styled from "styled-components";

export default function MemberInfo() {
  const gender = "female";
  return (
    <MemberInfoContainer>
      <Info>
        <Title>이름</Title>
        <Text>김논술</Text>
        <GenderBox>
          <Male $gender={gender}>남성</Male>
          <Female $gender={gender}>여성</Female>
        </GenderBox>
      </Info>
      <Info>
        <Title>생년월일</Title>
        <Text>20007년 7월 7일</Text>
      </Info>
      <Info>
        <Title>이메일</Title>
        <Text>nonsoolmate@gmail.com</Text>
        <ReviseButton>수정하기</ReviseButton>
      </Info>
      <Info>
        <Title>전화번호</Title>
        <Text>010-1122-3344</Text>
        <ReviseButton>수정하기</ReviseButton>
      </Info>
    </MemberInfoContainer>
  );
}

const MemberInfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  width: 100%;
  padding: 8rem 6.4rem;
`;
const Info = styled.li`
  display: flex;
  gap: 0.2rem;
  position: relative;
  width: 65rem;
`;
const Title = styled.p`
  ${({ theme }) => theme.fonts.Body3};

  width: 8.8rem;
`;
const Text = styled.p`
  ${({ theme }) => theme.fonts.Body4};
`;
const ReviseButton = styled.button`
  ${({ theme }) => theme.fonts.Body4};

  position: absolute;
  right: 0;
  width: 7.2rem;
  color: ${({ theme }) => theme.colors.main_blue};
`;
const GenderBox = styled.ul`
  ${({ theme }) => theme.fonts.Body7};

  display: flex;
  gap: 0.6rem;
  position: absolute;
  right: 26rem;
`;
const Male = styled.li<{ $gender: String }>`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ $gender, theme }) => ($gender == "male" ? theme.colors.main_blue : theme.colors.grey_400)};
  border-radius: 4px;
  background-color: ${({ $gender, theme }) => ($gender == "male" ? theme.colors.light_blue : theme.colors.grey_50)};
  color: ${({ $gender, theme }) => ($gender == "male" ? theme.colors.main_blue : theme.colors.grey_400)};
`;
const Female = styled.li<{ $gender: String }>`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ $gender, theme }) => ($gender == "female" ? theme.colors.main_blue : theme.colors.grey_400)};
  border-radius: 4px;
  background-color: ${({ $gender, theme }) => ($gender == "female" ? theme.colors.light_blue : theme.colors.grey_50)};
  color: ${({ $gender, theme }) => ($gender == "female" ? theme.colors.main_blue : theme.colors.grey_400)};
`;
