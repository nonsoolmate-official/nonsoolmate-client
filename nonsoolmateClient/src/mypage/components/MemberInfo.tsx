import styled from "styled-components";
import useGetProfile from "mypage/hooks/useGetProfile";
import { media } from "style/responsiveStyle";

export default function MemberInfo() {
  const response = useGetProfile();
  if (!response) return <></>;

  const { name, gender, birthday, email, phoneNumber } = response?.data;
  return (
    <MemberInfoContainer>
      <Info>
        <Title>이름</Title>
        <Text>{name}</Text>
        <GenderBox>
          <Male $gender={gender}>남성</Male>
          <Female $gender={gender}>여성</Female>
        </GenderBox>
      </Info>
      <Info>
        <Title>출생연도</Title>
        <Text>{birthday}년</Text>
      </Info>
      <Info>
        <Title>이메일</Title>
        <Text>{email}</Text>
        <ReviseButton>수정하기</ReviseButton>
      </Info>
      <Info>
        <Title>전화번호</Title>
        <Text>{phoneNumber}</Text>
        <ReviseButton>수정하기</ReviseButton>
      </Info>
    </MemberInfoContainer>
  );
}

const MemberInfoContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  position: relative;
  width: 100%;
  padding: 8rem 6.4rem;

  ${media.tablet} {
    padding: 3.1rem 3.2rem;
  }
`;

const Info = styled.li`
  display: flex;
  gap: 0.2rem;
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
  right: 22.5rem;
  width: 7.6rem;
  color: ${({ theme }) => theme.colors.main_blue};

  ${media.tablet} {
    right: 3.2rem;
  }
`;

const GenderBox = styled.ul`
  ${({ theme }) => theme.fonts.Body7};

  display: flex;
  gap: 0.6rem;
  position: absolute;
  right: 48.4rem;

  ${media.tablet} {
    right: 3.2rem;
  }
`;

const Male = styled.li<{ $gender: String }>`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ $gender, theme }) => ($gender == "M" ? theme.colors.main_blue : theme.colors.grey_400)};
  border-radius: 4px;
  background-color: ${({ $gender, theme }) => ($gender == "M" ? theme.colors.light_blue : theme.colors.grey_50)};
  color: ${({ $gender, theme }) => ($gender == "M" ? theme.colors.main_blue : theme.colors.grey_400)};
`;

const Female = styled.li<{ $gender: String }>`
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({ $gender, theme }) => ($gender == "F" ? theme.colors.main_blue : theme.colors.grey_400)};
  border-radius: 4px;
  background-color: ${({ $gender, theme }) => ($gender == "F" ? theme.colors.light_blue : theme.colors.grey_50)};
  color: ${({ $gender, theme }) => ($gender == "F" ? theme.colors.main_blue : theme.colors.grey_400)};
`;
